package com.agencia.msvc_proveedores.service;

import com.agencia.msvc_proveedores.entity.Provider;
import com.agencia.msvc_proveedores.repository.ProviderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProviderServiceImpl implements ProviderService {

    private final ProviderRepository repository;

    public ProviderServiceImpl(ProviderRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Provider> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Provider> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Provider save(Provider provider) {
        return repository.save(provider);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
