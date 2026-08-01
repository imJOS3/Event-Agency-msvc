package com.agencia.msvc_pagos.controller;

import com.agencia.msvc_pagos.entity.Bonus;
import com.agencia.msvc_pagos.service.BonusService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bonuses")
public class BonusController {

    private final BonusService service;

    public BonusController(BonusService service) {
        this.service = service;
    }

    @GetMapping
    public List<Bonus> listAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bonus> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Bonus> create(@RequestBody Bonus bonus) {
        return ResponseEntity.ok(service.save(bonus));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Bonus> update(@PathVariable Long id, @RequestBody Bonus bonus) {
        return service.findById(id)
                .map(existing -> {
                    bonus.setId(id);
                    return ResponseEntity.ok(service.save(bonus));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (service.findById(id).isPresent()) {
            service.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
