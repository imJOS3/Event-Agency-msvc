package com.agencia.msvc_facturacion.repository;

import com.agencia.msvc_facturacion.entity.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
}
