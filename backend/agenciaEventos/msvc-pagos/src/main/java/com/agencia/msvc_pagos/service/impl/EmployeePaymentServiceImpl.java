package com.agencia.msvc_pagos.service.impl;


import com.agencia.msvc_pagos.entity.EmployeePayment;
import com.agencia.msvc_pagos.repository.EmployeePaymentRepository;
import com.agencia.msvc_pagos.service.EmployeePaymentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeePaymentServiceImpl implements EmployeePaymentService {

    private final EmployeePaymentRepository repository;

    public EmployeePaymentServiceImpl(EmployeePaymentRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<EmployeePayment> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<EmployeePayment> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public EmployeePayment save(EmployeePayment payment) {
        return repository.save(payment);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
