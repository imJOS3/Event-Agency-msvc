package com.agencia.msvc_proveedores.service;

import com.agencia.msvc_proveedores.entity.Provider;

import java.util.List;
import java.util.Optional;

public interface ProviderService {
    List<Provider> findAll();
    Optional<Provider> findById(Long id);
    Provider save(Provider provider);
    void deleteById(Long id);
}
