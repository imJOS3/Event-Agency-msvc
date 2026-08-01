package com.agencia.auth.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String email;
    private boolean active;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    private Long employeeId; // Referencia al empleado (FK → empleado.id)
}
