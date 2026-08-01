// InventoryRepository.java
package com.agencia.msvc_inventario.repository;

import com.agencia.msvc_inventario.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {
}
