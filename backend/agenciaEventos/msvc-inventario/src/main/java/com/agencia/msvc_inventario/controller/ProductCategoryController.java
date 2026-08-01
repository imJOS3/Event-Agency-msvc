package com.agencia.msvc_inventario.controller;

import com.agencia.msvc_inventario.entity.ProductCategory;
import com.agencia.msvc_inventario.service.ProductCategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class ProductCategoryController {

    private final ProductCategoryService service;

    public ProductCategoryController(ProductCategoryService service) {
        this.service = service;
    }

    @GetMapping
    public List<ProductCategory> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductCategory> findById(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ProductCategory> create(@RequestBody ProductCategory category) {
        return ResponseEntity.ok(service.save(category));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductCategory> update(@PathVariable Long id, @RequestBody ProductCategory category) {
        return service.findById(id)
                .map(existing -> {
                    category.setId(id);
                    return ResponseEntity.ok(service.save(category));
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
