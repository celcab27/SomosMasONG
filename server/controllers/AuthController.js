const Joi = require('joi');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const TokenService = require('../services/TokenService');
const log = require('../utils/logger');
const { createToken } = require('../services/TokenService');
const sendMail = require('../services/mailService');

module.exports = {
  /**
   * Log in a user with email and password
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async login(req, res) {
    const loginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required()
    });

    try {
      const values = await loginSchema.validateAsync(req.body);
      const { email, password } = values;

      log.info(`User [${email}] is trying to login`);
      const user = await User.findOne({ where: { email: email } });

      if (!user) {
        log.warn(`User ${email} does not exist`);
        res.status(404).json({ ok: false });
      } else {
        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (passwordsMatch) {
          // copy of user.dataValues without password property
          const { password, ...sentValues } = user.dataValues;

          const token = TokenService.createToken({
            userId: user.id
          });

          log.info(`User [${email}] login was successful`);
          res.status(200).json({
            token,
            user: sentValues
          });
        } else {
          log.warn(`User [${email}] provided wrong credentials`);
          res.status(401).json({ ok: false });
        }
      }
    } catch (err) {
      if (err.details) {
        // body validation error
        log.error(`There was validation errors in body request. Errors: [${err.message}]`);
        res.status(422).json({ errors: err.details });
      } else {
        log.error(`Something went wrong. Error [${err.message}]`);
        res.status(500).json({ error: err.message });
      }
    }
  },

  /**
   * Register a new user account
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async register(req, res) {
    const registrationSchema = Joi.object({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required()
    });

    try {
      const values = await registrationSchema.validateAsync(req.body);
      log.info(`Registering user with email: [${req.body.email}]`);

      const existingUser = await User.findOne({
        where: {
          email: req.body.email
        }
      });
      if (existingUser) {
        log.warn(`Email [${req.body.email}] already registered`);
        return res.status(400).json({
          error: 'Email already registered'
        });
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email,
        password: hashedPassword,
        roleId: 2
      });
      // copy of user.dataValues without password property
      const { password, ...sentValues } = user.dataValues;
      // Send Mail Message
      const msg = {
        to: req.body.email,
        subject: 'Tu cuenta ha sido creada con exito.',
        text: 'Texto de ejemplo, la cuenta ha sido creada con exito.',
        html: '<h1>Bienvenido a Somos Más</h1><hr/><strong>Muchas gracias por registrarse como usuario. Ya puede iniciar sesión, cuando usted desee.</strong>'
      };
      await sendMail(msg);
      // create token
      const token = createToken({ userId: sentValues.id });

      log.info(`User [${sentValues.firstName}] was registered and login`);
      res.status(201).json({ user: sentValues, token });
    } catch (err) {
      if (err.details) {
        // body validation error
        log.error(`Body validation error. [${err.details}]`);
        res.status(422).json({ errors: err.details });
      } else {
        res.status(500).json({ error: err.message });
      }
    }
  },

  /**
   * Get details about the currently logged in user
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<void>}
   */
  async getCurrentUserInfo(req, res) {
    const { user } = req;
    const { password, ...sentValues } = user.dataValues; // exclude password
    res.status(200).json(sentValues);
  }
};
