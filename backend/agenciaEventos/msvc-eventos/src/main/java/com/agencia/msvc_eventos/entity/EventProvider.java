package com.agencia.msvc_eventos.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "event_providers")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventProvider {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "provider_id")
    private Long providerId;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;
}
