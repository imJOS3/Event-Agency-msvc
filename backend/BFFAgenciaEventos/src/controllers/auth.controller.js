const createApiClient = require('../utils/apiClient');

const registerUser = async (req, res) => {
  try {
    const response = await apiClient.post('/auth/register', req.body);
    res.json(response.data);
  } catch (error) {
    console.error('Error al registrar usuario:', error.message);
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
};

const loginUser = async (req, res) => {
  try {
    const client = createApiClient(); // aún no tenemos token
    const response = await client.post('/auth/login', req.body);

    if (response.data?.token) {
      req.session.token = response.data.token;
      res.json({ message: 'Login exitoso' }); // no enviamos el token al frontend
    } else {
      res.status(401).json({ message: 'Credenciales inválidas' });
    }
  } catch (error) {
    console.error('Error al autenticar usuario:', error.message);
    res.status(500).json({ message: 'Error al autenticar usuario' });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
