package com.agencia.msvc_facturacion.service;

import com.agencia.msvc_facturacion.entity.Invoice;

import java.util.List;
import java.util.Optional;

public interface InvoiceService {
    List<Invoice> findAll();
    Optional<Invoice> findById(Long id);
    Invoice save(Invoice invoice);
    void deleteById(Long id);
}
