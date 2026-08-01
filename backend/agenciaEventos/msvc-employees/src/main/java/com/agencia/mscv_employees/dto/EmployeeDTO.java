package com.agencia.mscv_employees.dto;

import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmployeeDTO {
    private Long id;
    private String document;
    private String name;
    private String lastname;
    private LocalDate birthdate;
    private String address;
    private String phone;
    private String email;
    private LocalDate employmentDate;
    private LocalDate exitDate;
    private String position;
    private Double salary;
    private boolean active;
}
