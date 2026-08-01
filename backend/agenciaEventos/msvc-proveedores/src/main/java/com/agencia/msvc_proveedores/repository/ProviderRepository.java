package com.agencia.msvc_proveedores.repository;

import com.agencia.msvc_proveedores.entity.Provider;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProviderRepository extends JpaRepository<Provider, Long> {
}
