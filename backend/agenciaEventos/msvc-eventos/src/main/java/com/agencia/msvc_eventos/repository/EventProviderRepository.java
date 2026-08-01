package com.agencia.msvc_eventos.repository;

import com.agencia.msvc_eventos.entity.EventProduct;
import com.agencia.msvc_eventos.entity.EventProvider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventProviderRepository extends JpaRepository<EventProvider, Long> {
    List<EventProvider> findByEventId(Long eventId);
}
