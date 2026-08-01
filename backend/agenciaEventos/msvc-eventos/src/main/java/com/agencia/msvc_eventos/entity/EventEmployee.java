package com.agencia.msvc_eventos.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "event_employees")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventEmployee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "employee_id")
    private Long employeeId;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;
}
