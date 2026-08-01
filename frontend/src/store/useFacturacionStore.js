// src/store/useFacturacionStore.js
import { create } from 'zustand';
import api from '../lib/api'; // Usa el cliente axios centralizado

export const useFacturacionStore = create((set) => ({
  facturas: [],
  facturaSeleccionada: null,
  loading: false,
  error: null,

  fetchFacturas: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get('/facturacion');
      set({ facturas: data, loading: false });
    } catch (error) {
      console.error('❌ Error al obtener las facturas:', error);
      set({ error: 'Error al obtener facturas', loading: false });
    }
  },

  fetchFacturaPorId: async (id) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get(`/facturacion/${id}`);
      set({ facturaSeleccionada: data, loading: false });
    } catch (error) {
      console.error(`❌ Error al obtener la factura con ID ${id}:`, error);
      set({ error: 'Error al obtener la factura', loading: false });
    }
  },

  crearFactura: async (nuevaFactura) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post('/facturacion', nuevaFactura);
      set((state) => ({
        facturas: [...state.facturas, data],
        loading: false,
      }));
    } catch (error) {
      console.error('❌ Error al crear factura:', error);
      set({ error: 'Error al crear factura', loading: false });
    }
  },

  actualizarFactura: async (facturaActualizada) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.put(`/facturacion/${facturaActualizada.id}`, facturaActualizada);
      set((state) => ({
        facturas: state.facturas.map((f) =>
          f.id === facturaActualizada.id ? data : f
        ),
        loading: false,
      }));
    } catch (error) {
      console.error('❌ Error al actualizar factura:', error);
      set({ error: 'Error al actualizar factura', loading: false });
    }
  },

  eliminarFactura: async (id) => {
    set({ loading: true, error: null });
    try {
      await api.delete(`/facturacion/${id}`);
      set((state) => ({
        facturas: state.facturas.filter((f) => f.id !== id),
        loading: false,
      }));
    } catch (error) {
      console.error('❌ Error al eliminar factura:', error);
      set({ error: 'Error al eliminar factura', loading: false });
    }
  },

  setFacturaSeleccionada: (factura) => set({ facturaSeleccionada: factura }),
}));
