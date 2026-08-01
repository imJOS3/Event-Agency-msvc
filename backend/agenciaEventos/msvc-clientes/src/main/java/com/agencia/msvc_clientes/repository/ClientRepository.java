package com.agencia.msvc_clientes.repository;

import com.agencia.msvc_clientes.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
    boolean existsByEmail(String email);
}
