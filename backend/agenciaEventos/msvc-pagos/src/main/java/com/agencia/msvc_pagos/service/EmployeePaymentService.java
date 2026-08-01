package com.agencia.msvc_pagos.service;

import com.agencia.msvc_pagos.entity.EmployeePayment;

import java.util.List;
import java.util.Optional;

public interface EmployeePaymentService {
    List<EmployeePayment> findAll();
    Optional<EmployeePayment> findById(Long id);
    EmployeePayment save(EmployeePayment payment);
    void deleteById(Long id);
}
