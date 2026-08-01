// src/store/useEventosStore.js
import { create } from 'zustand';
import api from '../lib/api'; // Cliente axios ya configurado

export const useEventosStore = create((set) => ({
  eventos: [],
  eventoSeleccionado: null,

  setEventoSeleccionado: (evento) => set({ eventoSeleccionado: evento }),

  fetchEventos: async () => {
    try {
      const { data } = await api.get('/eventos');
      console.log('Datos recibidos desde el backend:', data);
      if (Array.isArray(data)) {
        set({ eventos: data });
      } else {
        console.warn('La respuesta no es un array:', data);
        set({ eventos: [] });
      }
    } catch (error) {
      console.error('❌ Error al obtener eventos:', error);
      set({ eventos: [] });
    }
  },

  fetchEventoPorId: async (id) => {
    try {
      const { data } = await api.get(`/eventos/${id}`);
      console.log('Datos del evento recibido desde el backend:', data);
      set({ eventoSeleccionado: data });
    } catch (error) {
      console.error('❌ Error al obtener evento por ID:', error);
    }
  },

  crearEvento: async (evento) => {
    try {
      const { data } = await api.post('/eventos', evento);
      set((state) => ({
        eventos: [...state.eventos, data],
      }));
    } catch (error) {
      console.error('❌ Error al crear evento:', error);
    }
  },

  actualizarEvento: async (evento) => {
    try {
      const { data } = await api.put(`/eventos/${evento.id}`, evento);
      set((state) => ({
        eventos: state.eventos.map((e) =>
          e.id === evento.id ? data : e
        ),
      }));
    } catch (error) {
      console.error('❌ Error al actualizar evento:', error);
    }
  },

  eliminarEvento: async (id) => {
    try {
      await api.delete(`/eventos/${id}`);
      set((state) => ({
        eventos: state.eventos.filter((e) => e.id !== id),
      }));
    } catch (error) {
      console.error('❌ Error al eliminar evento:', error);
    }
  },
}));
