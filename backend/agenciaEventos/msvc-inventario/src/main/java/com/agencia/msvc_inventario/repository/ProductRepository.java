// ProductRepository.java
package com.agencia.msvc_inventario.repository;

import com.agencia.msvc_inventario.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
