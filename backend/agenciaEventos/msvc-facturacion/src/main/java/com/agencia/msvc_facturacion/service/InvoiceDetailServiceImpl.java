package com.agencia.msvc_facturacion.service;

import com.agencia.msvc_facturacion.entity.InvoiceDetail;
import com.agencia.msvc_facturacion.repository.InvoiceDetailRepository;
import com.agencia.msvc_facturacion.service.InvoiceDetailService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InvoiceDetailServiceImpl implements InvoiceDetailService {

    private final InvoiceDetailRepository repository;

    public InvoiceDetailServiceImpl(InvoiceDetailRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<InvoiceDetail> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<InvoiceDetail> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public InvoiceDetail save(InvoiceDetail detail) {
        return repository.save(detail);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
