const createApiClient = require('../utils/apiClient');

// Obtener todos los eventos
const getEventos = async (req, res) => {
  try {
    const apiClient = createApiClient(req.session.token);
    const response = await apiClient.get('/api/eventos');
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener eventos:', error.message);
    res.status(500).json({ message: 'Error al obtener eventos' });
  }
};

// Obtener un evento por ID
const getEventoById = async (req, res) => {
  const { id } = req.params;
  try {
    const apiClient = createApiClient(req.session.token);
    const response = await apiClient.get(`/api/eventos/${id}`);
    res.json(response.data);
  } catch (error) {
    console.error(`❌ Error al obtener evento con ID ${id}:`, error.message);
    res.status(500).json({ message: 'Error al obtener evento' });
  }
};

// Crear un nuevo evento
const createEvento = async (req, res) => {
  try {
    const apiClient = createApiClient(req.session.token);
    const response = await apiClient.post('/api/eventos', req.body);
    res.status(201).json(response.data);
  } catch (error) {
    console.error('❌ Error al crear evento:', error.message);
    res.status(500).json({ message: 'Error al crear evento' });
  }
};

// Actualizar un evento
const updateEvento = async (req, res) => {
  const { id } = req.params;
  try {
    const apiClient = createApiClient(req.session.token);
    const response = await apiClient.put(`/api/eventos/${id}`, req.body);
    res.json(response.data);
  } catch (error) {
    console.error(`❌ Error al actualizar evento con ID ${id}:`, error.message);
    res.status(500).json({ message: 'Error al actualizar evento' });
  }
};

// Eliminar un evento
const deleteEvento = async (req, res) => {
  const { id } = req.params;
  try {
    const apiClient = createApiClient(req.session.token);
    await apiClient.delete(`/api/eventos/${id}`);
    res.json({ message: 'Evento eliminado correctamente' });
  } catch (error) {
    console.error(`❌ Error al eliminar evento con ID ${id}:`, error.message);
    res.status(500).json({ message: 'Error al eliminar evento' });
  }
};

module.exports = {
  getEventos,
  getEventoById,
  createEvento,
  updateEvento,
  deleteEvento,
};
