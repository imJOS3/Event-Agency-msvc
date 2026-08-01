package com.agencia.msvc_proveedores.controller;

import com.agencia.msvc_proveedores.entity.Provider;
import com.agencia.msvc_proveedores.service.ProviderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/providers")
public class ProviderController {

    private final ProviderService service;

    public ProviderController(ProviderService service) {
        this.service = service;
    }

    @GetMapping
    public List<Provider> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Provider> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Provider> create(@RequestBody Provider provider) {
        return ResponseEntity.ok(service.save(provider));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Provider> update(@PathVariable Long id, @RequestBody Provider provider) {
        return service.findById(id)
                .map(existing -> {
                    existing.setName(provider.getName());
                    existing.setContactName(provider.getContactName());
                    existing.setEmail(provider.getEmail());
                    existing.setPhone(provider.getPhone());
                    existing.setAddress(provider.getAddress());
                    existing.setCategory(provider.getCategory());
                    existing.setActive(provider.getActive());
                    return ResponseEntity.ok(service.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        Optional<Provider> optional = service.findById(id);
        if (optional.isPresent()) {
            service.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.<Void>notFound().build();
        }
    }



}

