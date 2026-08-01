package com.agencia.msvc_pagos.service;

import com.agencia.msvc_pagos.entity.ClientPayment;

import java.util.List;
import java.util.Optional;

public interface ClientPaymentService {
    List<ClientPayment> findAll();
    Optional<ClientPayment> findById(Long id);
    ClientPayment save(ClientPayment payment);
    void deleteById(Long id);
}

