// src/store/usePagosStore.js
import { create } from 'zustand';
import api from '../lib/api'; // Cliente axios centralizado

export const usePagosStore = create((set) => ({
  pagos: [],
  loading: false,
  error: null,

  // Obtener todos los pagos
  getPagos: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get('/pagos');
      set({ pagos: data, loading: false });
    } catch (error) {
      console.error('❌ Error al obtener pagos:', error);
      set({ error: 'Error al obtener pagos', loading: false });
    }
  },

  // Crear nuevo pago
  crearPago: async (pagoData) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post('/pagos', pagoData);
      set((state) => ({
        pagos: [...state.pagos, data],
        loading: false,
      }));
    } catch (error) {
      console.error('❌ Error al crear pago:', error);
      set({ error: 'Error al crear pago', loading: false });
    }
  },

  // Actualizar un pago existente
  actualizarPago: async (id, pagoData) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.put(`/pagos/${id}`, pagoData);
      set((state) => ({
        pagos: state.pagos.map((pago) =>
          pago.id === id ? data : pago
        ),
        loading: false,
      }));
    } catch (error) {
      console.error('❌ Error al actualizar pago:', error);
      set({ error: 'Error al actualizar pago', loading: false });
    }
  },

  // Eliminar un pago
  eliminarPago: async (id) => {
    set({ loading: true, error: null });
    try {
      await api.delete(`/pagos/${id}`);
      set((state) => ({
        pagos: state.pagos.filter((pago) => pago.id !== id),
        loading: false,
      }));
    } catch (error) {
      console.error('❌ Error al eliminar pago:', error);
      set({ error: 'Error al eliminar pago', loading: false });
    }
  },
}));
