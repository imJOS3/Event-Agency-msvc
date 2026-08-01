package com.agencia.msvc_pagos.service.impl;


import com.agencia.msvc_pagos.entity.Bonus;
import com.agencia.msvc_pagos.repository.BonusRepository;
import com.agencia.msvc_pagos.service.BonusService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BonusServiceImpl implements BonusService {

    private final BonusRepository repository;

    public BonusServiceImpl(BonusRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Bonus> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Bonus> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Bonus save(Bonus bonus) {
        return repository.save(bonus);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}

