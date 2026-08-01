package com.agencia.msvc_pagos.repository;

import com.agencia.msvc_pagos.entity.InstallmentPayment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstallmentPaymentRepository extends JpaRepository<InstallmentPayment, Long> {
}
