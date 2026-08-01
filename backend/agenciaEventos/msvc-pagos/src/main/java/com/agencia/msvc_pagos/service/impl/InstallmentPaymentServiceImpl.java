package com.agencia.msvc_pagos.service.impl;

import com.agencia.msvc_pagos.entity.InstallmentPayment;
import com.agencia.msvc_pagos.repository.InstallmentPaymentRepository;
import com.agencia.msvc_pagos.service.InstallmentPaymentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InstallmentPaymentServiceImpl implements InstallmentPaymentService {

    private final InstallmentPaymentRepository repository;

    public InstallmentPaymentServiceImpl(InstallmentPaymentRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<InstallmentPayment> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<InstallmentPayment> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public InstallmentPayment save(InstallmentPayment installmentPayment) {
        return repository.save(installmentPayment);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
