package com.agencia.msvc_pagos.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "bonuses")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Bonus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "employee_id", nullable = false)
    private Long employeeId;

    @Column(nullable = false)
    private BigDecimal amount;

    private String description;

    @Column(name = "payment_date", nullable = false)
    private LocalDateTime paymentDate;

}
