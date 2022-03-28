const db = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const responses = require('../responses');

const login = (async (req, res) => {
    let input = req.body;
    let response = {};
    
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });
    let isValid = true;
    try {
        isValid = await schema.validateAsync(input);
    } catch (error) {
        isValid = false;
        response.message = error.details[0]['message'];
    }
    if(!isValid) return responses.validationErrorResponseData(res, response.message, 400);


    let user = null;
    let { email, password } = input;
    try {
        user = await db.User.findOne({ where: { email } });
    } catch (error) {
        console.log(error);
    }
    if(!user) return responses.errorResponseWithoutData(res, 'Invalid Email-ID.', 0, 200);

    let isValidPassword = true;
    try {
        isValidPassword = await bcrypt.compare(password, user.password);
    } catch (error) {
        isValidPassword = false;
    }
    if(!isValidPassword) return responses.errorResponseWithoutData(res, 'The password that you have entered is incorrect.', 0, 200);

    let payload = {
        _id: user._id, 
        email: user.email,
    };
    const token = jwt.sign(payload, process.env.JWT_KEY);
    responses.successResponseData(res, { user: payload }, 1, 'Logged in successfully.', { token });
});


const changePassword = (async (req, res) => {
    let input = req.body;
    let response = {};
    let inputValidationSchema = Joi.object({
        oldPassword: Joi.string().required(),
        newPassword: Joi.string().required()
    });
    let isValidInput = true;
    try {
        isValidInput = await inputValidationSchema.validateAsync(input);
    } catch (error) {
        isValidInput = false;
        response.message = error.details[0]['message'];
    }
    if(!isValidInput) return responses.validationErrorResponseData(res, response.message, 400);

    let { oldPassword, newPassword } = input;
    try {
        let password = (await db.User.findOne({
            attributes: ['password'],
            where: { _id: req.user._id }
        })).password;

        let isValidPassword = await bcrypt.compare(oldPassword, password);
        if(!isValidPassword) throw 'invalid password';

        let salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(newPassword, salt);

        await db.User.update({ password }, 
            { where: { _id: req.user._id } 
        });
        response.message = 'Your password has been changed successfully.';
        responses.successResponseWithoutData(res, response.message, 1);
    } catch (error) {
        if(error === 'invalid password') responses.validationErrorResponseData(res, 'Old password is wrong. Please enter correct old password.', 400);
        else responses.errorResponseWithoutData(res, 'Something went wrong. Please try again.', 0, 200);
    }
});

module.exports = { login, changePassword };