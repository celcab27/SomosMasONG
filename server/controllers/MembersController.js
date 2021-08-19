const Joi = require('joi')
const { Member } = require('../models')
const log = require('../utils/logger')

module.exports = {

    async getAllMembers(req, res){
        log.info('Sended all members')
        try {
        const allMembers = await Member.findAll();
        res.status(200).json({allMembers})
        } catch (error) {
            log.warn(`Something went wrong. Error: [${error.message}]`)
            res.status(500).json(error.message)
        }
    },

    async createMember(req, res){
        const memberSchema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            image: Joi.string()
        })

        try {
            log.info('Creating new member');
            await memberSchema.validateAsync(req.body);
            
            // Default value in image
            const newMember = {
                name: req.body.name,
                image: `${req.body.image || 'imagen.jpg'}`
            }

            const member = await Member.create(newMember);
            log.info('Member created');
            res.status(201).json({newMember: member});
        } catch (err) {
            if(err.details){
                //body validation error
                log.warn(`Body validation error. [${err.message}]`);
                res.status(422).json({errors: err.message});
            } else {
                log.error(`Error happened trying to create a member. Error: [${err.message}]`);
                res.status(500).json({error: err.message});
            }
        }
    }
}