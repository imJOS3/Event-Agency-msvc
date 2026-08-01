package com.agencia.mscv_employees.mapper;

import com.agencia.mscv_employees.dto.EmployeeDTO;
import com.agencia.mscv_employees.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDTO toDTO(Employee employee) {
        if (employee == null) return null;

        return EmployeeDTO.builder()
                .id(employee.getId())
                .document(employee.getDocument())
                .name(employee.getName())
                .lastname(employee.getLastname())
                .birthdate(employee.getBirthdate())
                .address(employee.getAddress())
                .phone(employee.getPhone())
                .email(employee.getEmail())
                .employmentDate(employee.getEmploymentDate())
                .exitDate(employee.getExitDate())
                .position(employee.getPosition())
                .salary(employee.getSalary())
                .active(employee.isActive())
                .build();
    }

    public static Employee toEntity(EmployeeDTO dto) {
        if (dto == null) return null;

        Employee employee = new Employee();
        employee.setId(dto.getId());
        employee.setDocument(dto.getDocument());
        employee.setName(dto.getName());
        employee.setLastname(dto.getLastname());
        employee.setBirthdate(dto.getBirthdate());
        employee.setAddress(dto.getAddress());
        employee.setPhone(dto.getPhone());
        employee.setEmail(dto.getEmail());
        employee.setEmploymentDate(dto.getEmploymentDate());
        employee.setExitDate(dto.getExitDate());
        employee.setPosition(dto.getPosition());
        employee.setSalary(dto.getSalary());
        employee.setActive(dto.isActive());

        return employee;
    }
}
