package com.agencia.msvc_facturacion.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "invoice_details")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InvoiceDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long invoiceId;

    private String description;

    private Integer quantity;

    private BigDecimal unitPrice;

    private BigDecimal subtotal;
}
