const db = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const responses = require('../responses');
const fs = require('fs');

const signup = (async (req, res) => {
    let input = req.body;
    let response = {};

    const inputValidationSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });
    let isValidInput = true;
    try {
        await inputValidationSchema.validateAsync(input);
    } catch (error) {
        isValidInput = false;
        response.message = error.details[0]['message'];
        try {
            fs.unlinkSync(`public/profile-images/${req.file.filename}`);
        } catch (error) {}
    }
    if(!isValidInput) return responses.validationErrorResponseData(res, response.message, 400);

    let isNewEmail = true;
    let { firstName, lastName, email, password } = input;
    try {
        let user = await db.User.findOne({ where: { email } });
        if(user) throw 'exists';
    } catch (error) {
        isNewEmail = false;
        if(error === 'exists') response.message = 'Email already exists.';
        else response.message = 'Something went wrong. Please try again.';
        try {
            fs.unlinkSync(`public/profile-images/${req.file.filename}`);
        } catch (error) {}
    }
    if(!isNewEmail) return responses.errorResponseWithoutData(res, response.message, 0, 200);

    if(req.file) input.profileImage = req.file.filename;

    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);
    input.password = hashedPassword;

    try {
        let user = await db.User.create(input);
        let payload = {
            _id: user._id,
            email: user.email
        };
        let token = jwt.sign(payload, process.env.JWT_KEY);
        responses.successResponseData(res, { user: payload }, 1, 'Account created successfully.', { token });
    } catch (error) {
        try {
            fs.unlinkSync(`public/profile-images/${req.file.filename}`);
        } catch (error) {}
        responses.errorResponseWithoutData(res, 'Something went wrong. Please try again.');
    }
});

module.exports = { signup };