package com.agencia.msvc_pagos.service.impl;

import com.agencia.msvc_pagos.entity.ClientPayment;
import com.agencia.msvc_pagos.repository.ClientPaymentRepository;
import com.agencia.msvc_pagos.service.ClientPaymentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientPaymentServiceImpl implements ClientPaymentService {

    private final ClientPaymentRepository repository;

    public ClientPaymentServiceImpl(ClientPaymentRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<ClientPayment> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<ClientPayment> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public ClientPayment save(ClientPayment payment) {
        return repository.save(payment);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
