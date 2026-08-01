package com.agencia.msvc_facturacion.controller;

import com.agencia.msvc_facturacion.entity.Invoice;
import com.agencia.msvc_facturacion.service.InvoiceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/invoices")
public class InvoiceController {

    private final InvoiceService service;

    public InvoiceController(InvoiceService service) {
        this.service = service;
    }

    @GetMapping
    public List<Invoice> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Invoice> findById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Invoice> save(@RequestBody Invoice invoice) {
        return ResponseEntity.ok(service.save(invoice));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Invoice> update(@PathVariable Long id, @RequestBody Invoice invoice) {
        return service.findById(id)
                .map(existing -> {
                    invoice.setId(id);
                    return ResponseEntity.ok(service.save(invoice));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (service.findById(id).isPresent()) {
            service.deleteById(id);
            return ResponseEntity.noContent().build(); // 204 No Content
        } else {
            return ResponseEntity.status(404).build(); // 404 Not Found, tipado como Void
        }
    }

}
