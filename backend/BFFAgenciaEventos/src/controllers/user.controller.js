const createApiClient = require('../utils/apiClient');

// Obtener todos los usuarios
const getUsers = async (req, res) => {
  try {
    const apiClient = createApiClient(req.session.token);
    const response = await apiClient.get('/api/usuarios');
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener usuarios:', error.message);
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
};

// Obtener usuario por ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const apiClient = createApiClient(req.session.token);
    const response = await apiClient.get(`/api/usuarios/${id}`);
    res.json(response.data);
  } catch (error) {
    console.error(`❌ Error al obtener usuario con ID ${id}:`, error.message);
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const apiClient = createApiClient(req.session.token);
    const response = await apiClient.post('/api/usuarios', req.body);
    res.status(201).json(response.data);
  } catch (error) {
    console.error('❌ Error al crear usuario:', error.message);
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
};

// Actualizar un usuario
const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const apiClient = createApiClient(req.session.token);
    const response = await apiClient.put(`/api/usuarios/${id}`, req.body);
    res.json(response.data);
  } catch (error) {
    console.error(`❌ Error al actualizar usuario con ID ${id}:`, error.message);
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
};

// Eliminar un usuario
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const apiClient = createApiClient(req.session.token);
    await apiClient.delete(`/api/usuarios/${id}`);
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error(`❌ Error al eliminar usuario con ID ${id}:`, error.message);
    res.status(500).json({ message: 'Error al eliminar el usuario' });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
