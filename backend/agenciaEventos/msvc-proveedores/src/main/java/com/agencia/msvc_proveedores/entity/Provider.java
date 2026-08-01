package com.agencia.msvc_proveedores.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "providers")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Provider {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String contactName;

    private String email;

    private String phone;

    private String address;

    private String category; // e.g., food, decoration, music

    private Boolean active;
}
