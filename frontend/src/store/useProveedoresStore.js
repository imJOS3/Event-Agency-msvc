// src/store/useProveedoresStore.js
import { create } from 'zustand';
import api from '../lib/api'; // Cliente axios centralizado

export const useProveedoresStore = create((set) => ({
  proveedores: [],
  proveedorSeleccionado: null,
  loading: false,
  error: null,

  // Obtener todos los proveedores
  getProveedores: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get('/proveedores');
      set({ proveedores: data, loading: false });
    } catch (error) {
      console.error('❌ Error al obtener proveedores:', error);
      set({ error: 'Error al obtener proveedores', loading: false });
    }
  },

  // Obtener un proveedor por ID
  getProveedorPorId: async (id) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get(`/proveedores/${id}`);
      set({ proveedorSeleccionado: data, loading: false });
    } catch (error) {
      console.error(`❌ Error al obtener proveedor con ID ${id}:`, error);
      set({ error: 'Error al obtener proveedor', loading: false });
    }
  },

  // Crear proveedor
  crearProveedor: async (proveedorData) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post('/proveedores', proveedorData);
      set((state) => ({
        proveedores: [...state.proveedores, data],
        loading: false,
      }));
    } catch (error) {
      console.error('❌ Error al crear proveedor:', error);
      set({ error: 'Error al crear proveedor', loading: false });
    }
  },

  // Actualizar proveedor
  actualizarProveedor: async (id, proveedorData) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.put(`/proveedores/${id}`, proveedorData);
      set((state) => ({
        proveedores: state.proveedores.map((proveedor) =>
          proveedor.id === id ? data : proveedor
        ),
        loading: false,
      }));
    } catch (error) {
      console.error('❌ Error al actualizar proveedor:', error);
      set({ error: 'Error al actualizar proveedor', loading: false });
    }
  },

  // Eliminar proveedor
  eliminarProveedor: async (id) => {
    set({ loading: true, error: null });
    try {
      await api.delete(`/proveedores/${id}`);
      set((state) => ({
        proveedores: state.proveedores.filter((proveedor) => proveedor.id !== id),
        loading: false,
      }));
    } catch (error) {
      console.error('❌ Error al eliminar proveedor:', error);
      set({ error: 'Error al eliminar proveedor', loading: false });
    }
  },
}));
