// src/store/useClientesStore.js
import { create } from 'zustand';
import api from '../lib/api'; // Reutilizamos el cliente axios configurado

const useClientesStore = create((set) => ({
  clientes: [],
  clienteSeleccionado: null,
  loading: false,
  error: null,

  fetchClientes: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get('/clientes');
      set({ clientes: data, loading: false });
    } catch (error) {
      set({ error: 'Error al obtener clientes', loading: false });
    }
  },

  crearCliente: async (nuevoCliente) => {
    try {
      const { data } = await api.post('/clientes', nuevoCliente);
      set((state) => ({
        clientes: [...state.clientes, data],
      }));
    } catch (error) {
      console.error('❌ Error al crear cliente:', error.message);
    }
  },

  actualizarCliente: async (id, datosActualizados) => {
    try {
      const { data } = await api.put(`/clientes/${id}`, datosActualizados);
      set((state) => ({
        clientes: state.clientes.map((cliente) =>
          cliente.id === id ? data : cliente
        ),
      }));
    } catch (error) {
      console.error('❌ Error al actualizar cliente:', error.message);
    }
  },

  eliminarCliente: async (id) => {
    try {
      await api.delete(`/clientes/${id}`);
      set((state) => ({
        clientes: state.clientes.filter((cliente) => cliente.id !== id),
      }));
    } catch (error) {
      console.error('❌ Error al eliminar cliente:', error.message);
    }
  },

  fetchClienteById: async (id) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get(`/clientes/${id}`);
      set({ clienteSeleccionado: data, loading: false });
    } catch (error) {
      set({ error: 'Error al obtener el cliente', loading: false });
    }
  },
}));

export default useClientesStore;
