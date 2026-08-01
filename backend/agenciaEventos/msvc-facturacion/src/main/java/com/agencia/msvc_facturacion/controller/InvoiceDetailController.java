package com.agencia.msvc_facturacion.controller;

import com.agencia.msvc_facturacion.entity.InvoiceDetail;
import com.agencia.msvc_facturacion.service.InvoiceDetailService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/invoice-details")
public class InvoiceDetailController {

    private final InvoiceDetailService service;

    public InvoiceDetailController(InvoiceDetailService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<InvoiceDetail>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<InvoiceDetail> getById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<InvoiceDetail> create(@RequestBody InvoiceDetail detail) {
        return ResponseEntity.ok(service.save(detail));
    }

    @PutMapping("/{id}")
    public ResponseEntity<InvoiceDetail> update(@PathVariable Long id, @RequestBody InvoiceDetail detail) {
        return service.findById(id)
                .map(existing -> {
                    detail.setId(id);
                    return ResponseEntity.ok(service.save(detail));
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
                .orElse(ResponseEntity.notFound().<Void>build());
    }
}
