package com.agencia.msvc_eventos.service;

import com.agencia.msvc_eventos.entity.Event;
import java.util.List;
import java.util.Optional;

public interface EventService {
    Event createEvent(Event event);
    Optional<Event> getEventById(Long id);
    List<Event> getAllEvents();
    void deleteEvent(Long id);

    void addEmployeeToEvent(Long eventId, Long employeeId);
    void addProviderToEvent(Long eventId, Long providerId);
    void addProductToEvent(Long eventId, Long productId, Integer quantity);
}