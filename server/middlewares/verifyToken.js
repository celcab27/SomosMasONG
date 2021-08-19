const { User } = require('../models/index');
const TokenService = require('../services/TokenService');

/**
 * Middleware to verify the token sent in the Authorization header.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const verifyToken = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(400).json({ error: 'No token provided' });

  try {
    const decodedJWT = TokenService.decodeToken(token);

    const user = await User.findOne({ where: { id: decodedJWT.userId } });
    if (!user) return res.status(401).json({ error: 'Invalid user' });

    req.user = user;
    next();
  } catch {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = verifyToken;
