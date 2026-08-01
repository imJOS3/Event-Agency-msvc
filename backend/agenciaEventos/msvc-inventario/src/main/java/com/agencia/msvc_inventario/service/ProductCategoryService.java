// ProductCategoryService.java
package com.agencia.msvc_inventario.service;

import com.agencia.msvc_inventario.entity.ProductCategory;

import java.util.List;
import java.util.Optional;

public interface ProductCategoryService {
    List<ProductCategory> findAll();
    Optional<ProductCategory> findById(Long id);
    ProductCategory save(ProductCategory category);
    void deleteById(Long id);
}
