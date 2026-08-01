package com.agencia.msvc_facturacion.service;

import com.agencia.msvc_facturacion.entity.InvoiceDetail;

import java.util.List;
import java.util.Optional;

public interface InvoiceDetailService {
    List<InvoiceDetail> findAll();
    Optional<InvoiceDetail> findById(Long id);
    InvoiceDetail save(InvoiceDetail detail);
    void deleteById(Long id);
}
