const schemas = require('./schemas/testimonials');

const validateCreate = (req, res, next) => {
  const { error, value } = schemas.create.validate(req.body);
  error ? res.status(422).json({ message: error.details[0].message }) : next();
};

module.exports = { validateCreate };
