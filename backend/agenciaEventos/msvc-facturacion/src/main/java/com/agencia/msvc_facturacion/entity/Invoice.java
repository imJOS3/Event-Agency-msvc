package com.agencia.msvc_facturacion.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "invoices")
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String invoiceNumber;

    @Temporal(TemporalType.DATE)
    private Date issueDate;

    private double total;

    private String status; // pending, paid, cancelled

    private Long eventId;

    private Long clientId;
}
