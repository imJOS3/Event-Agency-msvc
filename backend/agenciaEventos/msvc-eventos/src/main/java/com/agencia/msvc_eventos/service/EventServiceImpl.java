package com.agencia.msvc_eventos.service;

import com.agencia.msvc_eventos.entity.*;
import com.agencia.msvc_eventos.repository.EventEmployeeRepository;
import com.agencia.msvc_eventos.repository.EventProductRepository;
import com.agencia.msvc_eventos.repository.EventProviderRepository;
import com.agencia.msvc_eventos.repository.EventRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventServiceImpl implements EventService {

    private final EventRepository eventRepository;
    private final EventEmployeeRepository employeeRepository;
    private final EventProviderRepository providerRepository;
    private final EventProductRepository productRepository;

    public EventServiceImpl(EventRepository eventRepository,
                            EventEmployeeRepository employeeRepository,
                            EventProviderRepository providerRepository,
                            EventProductRepository productRepository) {
        this.eventRepository = eventRepository;
        this.employeeRepository = employeeRepository;
        this.providerRepository = providerRepository;
        this.productRepository = productRepository;
    }

    @Override
    public Event createEvent(Event event) {
        event.setStatus(EventStatus.CREATED);
        return eventRepository.save(event);
    }

    @Override
    public Optional<Event> getEventById(Long id) {
        return eventRepository.findById(id);
    }

    @Override
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @Override
    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }

    @Override
    public void addEmployeeToEvent(Long eventId, Long employeeId) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        EventEmployee ee = new EventEmployee();
        ee.setEvent(event);
        ee.setEmployeeId(employeeId);

        employeeRepository.save(ee);
    }

    @Override
    public void addProviderToEvent(Long eventId, Long providerId) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        EventProvider ep = new EventProvider();
        ep.setEvent(event);
        ep.setProviderId(providerId);

        providerRepository.save(ep);
    }

    @Override
    public void addProductToEvent(Long eventId, Long productId, Integer quantity) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        EventProduct ep = new EventProduct();
        ep.setEvent(event);
        ep.setProductId(productId);
        ep.setQuantity(quantity);

        productRepository.save(ep);
    }
}
