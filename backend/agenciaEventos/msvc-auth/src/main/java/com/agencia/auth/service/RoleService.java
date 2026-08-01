package com.agencia.auth.service;

import com.agencia.auth.entity.Role;
import com.agencia.auth.repository.RoleRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoleService {

    private final RoleRepository roleRepository;

    public List<Role> getAll() {
        return roleRepository.findAll();
    }

    public Role getById(Long id) {
        return roleRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Role not found"));
    }

    public Role create(Role role) {
        return roleRepository.save(role);
    }

    public Role update(Long id, Role updatedRole) {
        Role existingRole = getById(id);
        existingRole.setName(updatedRole.getName());
        return roleRepository.save(existingRole);
    }

    public void delete(Long id) {
        roleRepository.deleteById(id);
    }
}
