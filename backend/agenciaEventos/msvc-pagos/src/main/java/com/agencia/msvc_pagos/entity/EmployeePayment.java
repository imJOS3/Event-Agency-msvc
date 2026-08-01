package com.agencia.msvc_pagos.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "employee_payments")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmployeePayment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "invoice_id", nullable = false)
    private Long invoiceId;

    @Column(name = "client_id", nullable = false)
    private Long clientId;

    @Column(name = "payment_date", nullable = false)
    private LocalDateTime paymentDate;

    @Column(nullable = false)
    private BigDecimal amount;

    @Column(nullable = false, length = 100)
    private String concept;

    @Column(name = "payment_method")
    private String paymentMethod;

    @Column(name = "payment_status", nullable = false)
    private String paymentStatus;

    @Column(name = "payment_type", nullable = false)
    private String paymentType;
}
