package com.agencia.msvc_eventos.controller;

import com.agencia.msvc_eventos.entity.*;
import com.agencia.msvc_eventos.service.EventService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/events")
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    // 📌 Crear un nuevo evento
    @PostMapping
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        return ResponseEntity.ok(eventService.createEvent(event));
    }

    // 📌 Obtener todos los eventos
    @GetMapping
    public ResponseEntity<List<Event>> getAllEvents() {
        return ResponseEntity.ok(eventService.getAllEvents());
    }

    // 📌 Obtener evento por ID
    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        Optional<Event> event = eventService.getEventById(id);
        return event.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // 📌 Eliminar evento por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return ResponseEntity.noContent().build();
    }

    // 📌 Asignar empleado al evento
    @PostMapping("/{eventId}/employees/{employeeId}")
    public ResponseEntity<Void> addEmployeeToEvent(
            @PathVariable Long eventId,
            @PathVariable Long employeeId
    ) {
        eventService.addEmployeeToEvent(eventId, employeeId);
        return ResponseEntity.ok().build();
    }

    // 📌 Asignar proveedor al evento
    @PostMapping("/{eventId}/providers/{providerId}")
    public ResponseEntity<Void> addProviderToEvent(
            @PathVariable Long eventId,
            @PathVariable Long providerId
    ) {
        eventService.addProviderToEvent(eventId, providerId);
        return ResponseEntity.ok().build();
    }

    // 📌 Asignar producto al evento
    @PostMapping("/{eventId}/products/{productId}")
    public ResponseEntity<Void> addProductToEvent(
            @PathVariable Long eventId,
            @PathVariable Long productId,
            @RequestParam Integer quantity
    ) {
        eventService.addProductToEvent(eventId, productId, quantity);
        return ResponseEntity.ok().build();
    }
}
