package com.agencia.msvc_inventario.service;

import com.agencia.msvc_inventario.entity.Inventory;

import java.util.List;
import java.util.Optional;

public interface InventoryService {
    List<Inventory> findAll();
    Optional<Inventory> findById(Long id);
    Inventory save(Inventory inventory);
    void deleteById(Long id);
}
