// ProductCategoryServiceImpl.java
package com.agencia.msvc_inventario.service.impl;

import com.agencia.msvc_inventario.entity.ProductCategory;
import com.agencia.msvc_inventario.repository.ProductCategoryRepository;
import com.agencia.msvc_inventario.service.ProductCategoryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductCategoryServiceImpl implements ProductCategoryService {

    private final ProductCategoryRepository repository;

    public ProductCategoryServiceImpl(ProductCategoryRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<ProductCategory> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<ProductCategory> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public ProductCategory save(ProductCategory category) {
        return repository.save(category);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
