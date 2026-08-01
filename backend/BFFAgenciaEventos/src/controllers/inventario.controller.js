const createApiClient = require('../utils/apiClient');

// Obtener todos los productos de inventario
const getInventario = async (req, res) => {
  try {
    const apiClient = createApiClient(req.session.token);
    const response = await apiClient.get('/api/inventario');
    res.json(response.data);
  } catch (error) {
    console.error('❌ Error al obtener inventario:', error.message);
    res.status(500).json({ message: 'Error al obtener inventario' });
  }
};

// Obtener un producto de inventario por ID
const getProductoById = async (req, res) => {
  const { id } = req.params;
  try {
    const apiClient = createApiClient(req.session.token);
    const response = await apiClient.get(`/api/inventario/${id}`);
    res.json(response.data);
  } catch (error) {
    console.error(`❌ Error al obtener producto con ID ${id}:`, error.message);
    res.status(500).json({ message: 'Error al obtener producto' });
  }
};

// Crear un nuevo producto en inventario
const createProducto = async (req, res) => {
  try {
    const apiClient = createApiClient(req.session.token);
    const response = await apiClient.post('/api/inventario', req.body);
    res.status(201).json(response.data);
  } catch (error) {
    console.error('❌ Error al crear producto:', error.message);
    res.status(500).json({ message: 'Error al crear producto' });
  }
};

// Actualizar un producto en inventario
const updateProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const apiClient = createApiClient(req.session.token);
    const response = await apiClient.put(`/api/inventario/${id}`, req.body);
    res.json(response.data);
  } catch (error) {
    console.error(`❌ Error al actualizar producto con ID ${id}:`, error.message);
    res.status(500).json({ message: 'Error al actualizar producto' });
  }
};

// Eliminar un producto del inventario
const deleteProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const apiClient = createApiClient(req.session.token);
    await apiClient.delete(`/api/inventario/${id}`);
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error(`❌ Error al eliminar producto con ID ${id}:`, error.message);
    res.status(500).json({ message: 'Error al eliminar producto' });
  }
};

module.exports = {
  getInventario,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto,
};
