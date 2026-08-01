package com.agencia.msvc_eventos.repository;

import com.agencia.msvc_eventos.entity.EventEmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventEmployeeRepository extends JpaRepository<EventEmployee, Long> {
    List<EventEmployee> findByEventId(Long eventId);
}
