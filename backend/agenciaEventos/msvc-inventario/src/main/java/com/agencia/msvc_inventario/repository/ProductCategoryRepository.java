// ProductCategoryRepository.java
package com.agencia.msvc_inventario.repository;

import com.agencia.msvc_inventario.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
