package com.agencia.msvc_pagos.repository;

import com.agencia.msvc_pagos.entity.EmployeePayment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeePaymentRepository extends JpaRepository<EmployeePayment, Long> {
}
