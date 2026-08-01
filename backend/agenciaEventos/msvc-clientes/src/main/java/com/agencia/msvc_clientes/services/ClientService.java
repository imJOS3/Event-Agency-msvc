package com.agencia.msvc_clientes.services;

import com.agencia.msvc_clientes.entity.Client;

import java.util.List;
import java.util.Optional;

public interface ClientService {
    Client save(Client client);
    Optional<Client> findById(Long id);
    List<Client> findAll();
    void deleteById(Long id);
}
