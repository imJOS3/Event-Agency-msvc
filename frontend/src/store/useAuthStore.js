// src/store/useAuthStore.js
import { create } from 'zustand';
import api from '../lib/api';

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  login: async (credentials) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post('/auth/login', credentials);
      set({ user: data.user || null, loading: false });
      return true;
    } catch (err) {
      set({
        error: err.response?.data?.message || 'Error al iniciar sesión',
        loading: false,
      });
      return false;
    }
  },

  logout: async () => {
    try {
      await api.post('/auth/logout');
    } catch (err) {
      console.error('Error al cerrar sesión', err);
    } finally {
      set({ user: null });
    }
  },

  register: async (formData) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post('/auth/register', formData);
      set({ user: data.user || null, loading: false });
    } catch (err) {
      set({
        error: err.response?.data?.message || 'Error al registrar usuario',
        loading: false,
      });
    }
  }

}));
