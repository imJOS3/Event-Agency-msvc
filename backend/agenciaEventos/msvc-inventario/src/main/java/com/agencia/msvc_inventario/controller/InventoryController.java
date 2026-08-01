package com.agencia.msvc_inventario.controller;

import com.agencia.msvc_inventario.entity.Inventory;
import com.agencia.msvc_inventario.service.InventoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
public class InventoryController {

    private final InventoryService service;

    public InventoryController(InventoryService service) {
        this.service = service;
    }

    @GetMapping
    public List<Inventory> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Inventory> findById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Inventory> save(@RequestBody Inventory inventory) {
        return ResponseEntity.ok(service.save(inventory));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Inventory> update(@PathVariable Long id, @RequestBody Inventory inventory) {
        return service.findById(id)
                .map(existing -> {
                    inventory.setId(id);
                    return ResponseEntity.ok(service.save(inventory));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        return service.findById(id)
                .map(existing -> {
                    service.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
