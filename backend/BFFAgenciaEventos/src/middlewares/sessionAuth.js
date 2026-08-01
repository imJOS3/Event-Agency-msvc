const sessionAuth = (req, res, next) => {
    if (!req.session.token) {
      return res.status(401).json({ message: 'No autenticado' });
    }
    next();
  };
  
  module.exports = sessionAuth;
  