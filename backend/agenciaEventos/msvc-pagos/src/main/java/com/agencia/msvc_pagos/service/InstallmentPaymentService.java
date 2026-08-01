package com.agencia.msvc_pagos.service;

import com.agencia.msvc_pagos.entity.InstallmentPayment;

import java.util.List;
import java.util.Optional;

public interface InstallmentPaymentService {
    List<InstallmentPayment> findAll();
    Optional<InstallmentPayment> findById(Long id);
    InstallmentPayment save(InstallmentPayment installmentPayment);
    void deleteById(Long id);
}
