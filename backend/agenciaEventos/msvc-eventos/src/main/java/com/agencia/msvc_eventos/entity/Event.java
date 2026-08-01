package com.agencia.msvc_eventos.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name = "events")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private LocalDate date;
    private String location;


    @Enumerated(EnumType.STRING)
    private EventStatus status;

    private Double budget;

    @Column(name = "client_id")
    private Long clientId;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    private Set<EventEmployee> employees;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    private Set<EventProvider> providers;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    private Set<EventProduct> products;
}
