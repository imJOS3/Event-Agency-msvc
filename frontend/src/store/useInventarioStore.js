// src/store/useInventarioStore.js
import { create } from 'zustand';
import api from '../lib/api'; // Cliente axios centralizado

export const useInventarioStore = create((set) => ({
  inventario: [],
  itemSeleccionado: null,
  loading: false,
  error: null,

  fetchInventario: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get('/inventario');
      set({ inventario: data, loading: false });
    } catch (error) {
      console.error('❌ Error al obtener inventario:', error);
      set({ error: 'Error al obtener inventario', loading: false });
    }
  },

  fetchItemPorId: async (id) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get(`/inventario/${id}`);
      set({ itemSeleccionado: data, loading: false });
    } catch (error) {
      console.error(`❌ Error al obtener item con ID ${id}:`, error);
      set({ error: 'Error al obtener el item', loading: false });
    }
  },

  crearItem: async (item) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post('/inventario', item);
      set((state) => ({
        inventario: [...state.inventario, data],
        loading: false,
      }));
    } catch (error) {
      console.error('❌ Error al crear item:', error);
      set({ error: 'Error al crear item', loading: false });
    }
  },

  actualizarItem: async (item) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.put(`/inventario/${item.id}`, item);
      set((state) => ({
        inventario: state.inventario.map((i) =>
          i.id === item.id ? data : i
        ),
        itemSeleccionado: null,
        loading: false,
      }));
    } catch (error) {
      console.error('❌ Error al actualizar item:', error);
      set({ error: 'Error al actualizar item', loading: false });
    }
  },

  eliminarItem: async (id) => {
    set({ loading: true, error: null });
    try {
      await api.delete(`/inventario/${id}`);
      set((state) => ({
        inventario: state.inventario.filter((i) => i.id !== id),
        loading: false,
      }));
    } catch (error) {
      console.error('❌ Error al eliminar item:', error);
      set({ error: 'Error al eliminar item', loading: false });
    }
  },

  setItemSeleccionado: (item) => set({ itemSeleccionado: item }),
}));
