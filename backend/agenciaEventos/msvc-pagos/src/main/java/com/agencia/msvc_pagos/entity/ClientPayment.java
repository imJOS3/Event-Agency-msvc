package com.agencia.msvc_pagos.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "client_payments")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClientPayment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer invoiceId;

    private Integer clientId;

    private LocalDateTime paymentDate;

    private BigDecimal amount;

    private String concept;

    private String paymentMethod;

    private String paymentStatus; // e.g., "Pending", "Completed"

    private String paymentType; // e.g., "Single", "Installment"
}
