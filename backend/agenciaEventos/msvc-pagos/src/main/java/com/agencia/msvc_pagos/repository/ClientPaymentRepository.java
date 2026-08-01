package com.agencia.msvc_pagos.repository;

import com.agencia.msvc_pagos.entity.ClientPayment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientPaymentRepository extends JpaRepository<ClientPayment, Long> {
}
