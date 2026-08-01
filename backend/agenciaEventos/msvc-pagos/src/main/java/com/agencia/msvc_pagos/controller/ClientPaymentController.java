package com.agencia.msvc_pagos.controller;

import com.agencia.msvc_pagos.entity.ClientPayment;
import com.agencia.msvc_pagos.service.ClientPaymentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/client-payments")
public class ClientPaymentController {

    private final ClientPaymentService service;

    public ClientPaymentController(ClientPaymentService service) {
        this.service = service;
    }

    @GetMapping
    public List<ClientPayment> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClientPayment> findById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ClientPayment> save(@RequestBody ClientPayment payment) {
        return ResponseEntity.ok(service.save(payment));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClientPayment> update(@PathVariable Long id, @RequestBody ClientPayment payment) {
        return service.findById(id)
                .map(existing -> {
                    payment.setId(id);
                    return ResponseEntity.ok(service.save(payment));
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
