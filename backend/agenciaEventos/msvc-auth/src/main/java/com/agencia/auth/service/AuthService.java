package com.agencia.auth.service;

import com.agencia.auth.dto.AuthResponse;
import com.agencia.auth.dto.LoginRequest;
import com.agencia.auth.dto.RegisterRequest;
import com.agencia.auth.entity.User;
import com.agencia.auth.repository.UserRepository;
import com.agencia.auth.config.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserService userService;
    private final UserRepository userRepository; // agregado para buscar por username
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthResponse register(RegisterRequest request) {
        // Validar si ya existe un usuario con ese username (usando UserRepository directamente)
        userRepository.findByUsername(request.getEmail()).ifPresent(user -> {
            throw new IllegalArgumentException("Email is already in use");
        });

        User user = new User();
        user.setUsername(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword()); // la codificación ya se hace dentro de create()

        userService.create(user); // usamos create(), ya codifica la contraseña

        String token = jwtService.generateToken(user);
        return new AuthResponse(token);
    }

    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByUsername(request.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new IllegalArgumentException("Invalid credentials");
        }

        String token = jwtService.generateToken(user);
        return new AuthResponse(token);
    }
}
