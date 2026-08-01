package com.agencia.msvc_eventos.repository;

import com.agencia.msvc_eventos.entity.EventProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventProductRepository extends JpaRepository<EventProduct, Long> {
    List<EventProduct> findByEventId(Long eventId);
}
