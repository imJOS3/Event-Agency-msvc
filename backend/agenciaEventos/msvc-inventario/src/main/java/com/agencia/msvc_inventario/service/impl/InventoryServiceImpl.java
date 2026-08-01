package com.agencia.msvc_inventario.service.impl;

import com.agencia.msvc_inventario.entity.Inventory;
import com.agencia.msvc_inventario.repository.InventoryRepository;
import com.agencia.msvc_inventario.service.InventoryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InventoryServiceImpl implements InventoryService {

    private final InventoryRepository repository;

    public InventoryServiceImpl(InventoryRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Inventory> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Inventory> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Inventory save(Inventory inventory) {
        return repository.save(inventory);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
