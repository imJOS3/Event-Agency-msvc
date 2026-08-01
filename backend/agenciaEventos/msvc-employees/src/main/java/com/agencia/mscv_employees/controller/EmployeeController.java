package com.agencia.mscv_employees.controller;


import com.agencia.mscv_employees.dto.EmployeeDTO;
import com.agencia.mscv_employees.entity.Employee;
import com.agencia.mscv_employees.mapper.EmployeeMapper;
import com.agencia.mscv_employees.service.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

    @GetMapping
    public List<EmployeeDTO> getAllEmployees() {
        return service.getAllEmployees().stream()
                .map(EmployeeMapper::toDTO)
                .collect(Collectors.toList());
    }

    @GetMapping("/active")
    public List<EmployeeDTO> getActiveEmployees() {
        return service.getActiveEmployees().stream()
                .map(EmployeeMapper::toDTO)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDTO> getEmployeeById(@PathVariable Long id) {
        return service.getEmployeeById(id)
                .map(EmployeeMapper::toDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<EmployeeDTO> createEmployee(@RequestBody EmployeeDTO employeeDTO) {
        Employee employee = EmployeeMapper.toEntity(employeeDTO);
        Employee saved = service.saveEmployee(employee);
        return ResponseEntity.ok(EmployeeMapper.toDTO(saved));
    }

    @PutMapping("/{id}")
    public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable Long id, @RequestBody EmployeeDTO employeeDTO) {
        return service.getEmployeeById(id)
                .map(existing -> {
                    Employee employeeToUpdate = EmployeeMapper.toEntity(employeeDTO);
                    employeeToUpdate.setId(id);
                    Employee updated = service.saveEmployee(employeeToUpdate);
                    return ResponseEntity.ok(EmployeeMapper.toDTO(updated));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id) {
        service.deleteEmployee(id);
        return ResponseEntity.noContent().build();
    }
}
