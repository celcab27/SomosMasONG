const Joi = require('joi');

const schemas = {
  create: Joi.object().keys({
    name: Joi.string().required().min(3).max(20).messages({
      'string.min': 'El nombre debe tener al menos 3 caracteres',
      'string.max': 'El nombre no puede tener más de 20 caracteres'
    }),
    image: Joi.string().required().min(3).max(255).messages({
      'string.min': 'La imagen debe tener al menos 3 caracteres',
      'string.max': 'La imagen no puede tener más de 255 caracteres'
    }),
    content: Joi.string().required().min(50).max(300).messages({
      'string.min': 'El contenido debe tener al menos 50 caracteres',
      'string.max': 'El contenido no puede tener más de 300 caracteres'
    })
  })
};

module.exports = schemas;
