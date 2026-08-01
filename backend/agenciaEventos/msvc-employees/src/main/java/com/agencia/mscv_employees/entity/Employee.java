package com.agencia.mscv_employees.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "empleados")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String document;

    private String name;

    private String lastname;

    private LocalDate birthdate;

    private String address;

    private String phone;

    private String email;

    @Column(name = "employment_date")
    private LocalDate employmentDate;

    @Column(name = "exit_date")
    private LocalDate exitDate;

    private String position;

    private Double salary;

    private boolean active; // true si está activo, false si ya salió
}
