package com.agencia.msvc_pagos.controller;


import com.agencia.msvc_pagos.entity.EmployeePayment;
import com.agencia.msvc_pagos.service.EmployeePaymentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employee-payments")
public class EmployeePaymentController {

    private final EmployeePaymentService service;

    public EmployeePaymentController(EmployeePaymentService service) {
        this.service = service;
    }

    @GetMapping
    public List<EmployeePayment> listAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeePayment> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<EmployeePayment> create(@RequestBody EmployeePayment payment) {
        return ResponseEntity.ok(service.save(payment));
    }

    @PutMapping("/{id}")
    public ResponseEntity<EmployeePayment> update(@PathVariable Long id, @RequestBody EmployeePayment payment) {
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

