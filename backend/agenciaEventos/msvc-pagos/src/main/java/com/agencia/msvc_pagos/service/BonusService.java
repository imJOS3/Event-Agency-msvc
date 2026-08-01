package com.agencia.msvc_pagos.service;

import com.agencia.msvc_pagos.entity.Bonus;

import java.util.List;
import java.util.Optional;

public interface BonusService {
    List<Bonus> findAll();
    Optional<Bonus> findById(Long id);
    Bonus save(Bonus bonus);
    void deleteById(Long id);
}
