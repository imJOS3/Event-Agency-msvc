const createApiClient = require('../utils/apiClient');

// Obtener todas las facturas
const getFacturas = async (req, res) => {
  try {
    const apiClient = createApiClient(req.session.token);
    const response = await apiClient.get('/api/facturacion');
    res.json(response.data);
  } catch (error) {
    console.error('❌ Error al obtener facturas:', error.message);
    res.status(500).json({ message: 'Error al obtener facturas' });
  }
};

// Obtener una factura por ID
const getFacturaById = async (req, res) => {
  const { id } = req.params;
  try {
    const apiClient = createApiClient(req.session.token);
    const response = await apiClient.get(`/api/facturacion/${id}`);
    res.json(response.data);
  } catch (error) {
    console.error(`❌ Error al obtener factura con ID ${id}:`, error.message);
    res.status(500).json({ message: 'Error al obtener factura' });
  }
};

// Crear una nueva factura
const createFactura = async (req, res) => {
  try {
    const apiClient = createApiClient(req.session.token);
    const response = await apiClient.post('/api/facturacion', req.body);
    res.status(201).json(response.data);
  } catch (error) {
    console.error('❌ Error al crear factura:', error.message);
    res.status(500).json({ message: 'Error al crear factura' });
  }
};

// Actualizar una factura
const updateFactura = async (req, res) => {
  const { id } = req.params;
  try {
    const apiClient = createApiClient(req.session.token);
    const response = await apiClient.put(`/api/facturacion/${id}`, req.body);
    res.json(response.data);
  } catch (error) {
    console.error(`❌ Error al actualizar factura con ID ${id}:`, error.message);
    res.status(500).json({ message: 'Error al actualizar factura' });
  }
};

// Eliminar una factura
const deleteFactura = async (req, res) => {
  const { id } = req.params;
  try {
    const apiClient = createApiClient(req.session.token);
    await apiClient.delete(`/api/facturacion/${id}`);
    res.json({ message: 'Factura eliminada correctamente' });
  } catch (error) {
    console.error(`❌ Error al eliminar factura con ID ${id}:`, error.message);
    res.status(500).json({ message: 'Error al eliminar factura' });
  }
};

module.exports = {
  getFacturas,
  getFacturaById,
  createFactura,
  updateFactura,
  deleteFactura,
};
