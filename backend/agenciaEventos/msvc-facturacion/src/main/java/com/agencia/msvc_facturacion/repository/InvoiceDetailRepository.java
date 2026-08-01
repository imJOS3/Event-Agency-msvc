package com.agencia.msvc_facturacion.repository;

import com.agencia.msvc_facturacion.entity.InvoiceDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceDetailRepository extends JpaRepository<InvoiceDetail, Long> {
}
