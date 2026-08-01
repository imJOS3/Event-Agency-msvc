package com.agencia.msvc_facturacion.service;

import com.agencia.msvc_facturacion.entity.Invoice;
import com.agencia.msvc_facturacion.repository.InvoiceRepository;
import com.agencia.msvc_facturacion.service.InvoiceService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InvoiceServiceImpl implements InvoiceService {

    private final InvoiceRepository repository;

    public InvoiceServiceImpl(InvoiceRepository repository) {
        this.repository = repository;
    }

    public List<Invoice> findAll() {
        return repository.findAll();
    }

    public Optional<Invoice> findById(Long id) {
        return repository.findById(id);
    }

    public Invoice save(Invoice invoice) {
        return repository.save(invoice);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
