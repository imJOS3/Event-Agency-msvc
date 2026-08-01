package com.agencia.msvc_eventos.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "event_products")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product_id")
    private Long productId;

    private Integer quantity;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;
}
