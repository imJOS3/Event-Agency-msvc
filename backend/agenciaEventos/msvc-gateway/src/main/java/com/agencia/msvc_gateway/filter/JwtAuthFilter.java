package com.agencia.msvc_gateway.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.nio.charset.StandardCharsets;
import java.security.Key;

@Component
public class JwtAuthFilter implements GlobalFilter, Ordered {

    private static final String secretKey = "12345678901234567890123456789012"; // mínimo 256 bits (32 caracteres)

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String path = exchange.getRequest().getURI().getPath();
        System.out.println("[JwtAuthFilter] Ruta solicitada: " + path);

        // Permitir login y register sin token
        if (path.startsWith("/api/auth/login") || path.startsWith("/api/auth/register")) {
            System.out.println("[JwtAuthFilter] Ruta pública, permitida sin token.");
            return chain.filter(exchange);
        }

        // Obtener token del header
        String authHeader = exchange.getRequest().getHeaders().getFirst(HttpHeaders.AUTHORIZATION);
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            System.out.println("[JwtAuthFilter] Token no presente o mal formado.");
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }

        String token = authHeader.substring(7); // quitar "Bearer "
        try {
            Key key = Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            String userEmail = claims.getSubject(); // se espera que el subject sea el email
            System.out.println("[JwtAuthFilter] Token válido para: " + userEmail);

            // Modificar el request para pasar info a otros microservicios
            ServerWebExchange modifiedExchange = exchange.mutate()
                    .request(builder -> builder.header("X-User-Email", userEmail))
                    .build();

            return chain.filter(modifiedExchange);

        } catch (Exception e) {
            System.out.println("[JwtAuthFilter] Error al validar token: " + e.getMessage());
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }
    }

    @Override
    public int getOrder() {
        return -1; // ejecutar antes que otros filtros
    }
}
