package com.agencia.msvc_pagos.controller;

import com.agencia.msvc_pagos.entity.InstallmentPayment;
import com.agencia.msvc_pagos.service.InstallmentPaymentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/installments")
public class InstallmentPaymentController {

    private final InstallmentPaymentService service;

    public InstallmentPaymentController(InstallmentPaymentService service) {
        this.service = service;
    }

    @GetMapping
    public List<InstallmentPayment> listAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<InstallmentPayment> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<InstallmentPayment> create(@RequestBody InstallmentPayment installmentPayment) {
        return ResponseEntity.ok(service.save(installmentPayment));
    }

    @PutMapping("/{id}")
    public ResponseEntity<InstallmentPayment> update(@PathVariable Long id, @RequestBody InstallmentPayment installmentPayment) {
        return service.findById(id)
                .map(existing -> {
                    installmentPayment.setId(id);
                    return ResponseEntity.ok(service.save(installmentPayment));
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
