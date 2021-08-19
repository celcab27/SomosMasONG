const jwt = require('jsonwebtoken');

const createToken = (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '2 days' });
};

const decodeToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};

module.exports = { createToken, decodeToken };
