const db = require('../../models');
const Joi = require('joi');
const responses = require('../responses');

const getMovies = (async (req, res) => {
    try {
        let movies = await db.Movie.findAll();
        let totalRecords = movies.length;
        responses.successResponseData(res, { movies }, 1, 'Movies fetched successfully.', { totalRecords });
    } catch (error) {
        responses.errorResponseWithoutData(res, 'Something went wrong. Please try again.', 0, 200);
        console.log(error);
    }
});

const getMovie = (async (req, res) => {
    let params = req.params;
    if(!params || !params.id) return responses.validationErrorResponseData(res, 'ID not entered.', 400);

    let { id } = params;
    
    try {
        let movie = await db.Movie.findOne({ where: { id } });
        if(movie) responses.successResponseData(res, { movie }, 1, 'Movie fetched successfully.', null);
        else responses.successResponseWithoutData(res, 'No movie found with this ID.', 1);
    } catch (error) {
        responses.errorResponseWithoutData(res, 'Something went wrong. Please try again.', 0, 200);
    }
});

const addMovie = (async (req, res) => {
    let input = req.body;    
    let response = {};
    const validationSchema = Joi.object({
        id: Joi.string().required(),
        title: Joi.string().required(),
        fullTitle: Joi.string().required(),
        year: Joi.number().integer().min(1000).max(9999).required(),
        image: Joi.string().required(),
        crew: Joi.string().required(),
        imDbRating: Joi.number(),
        imDbRatingCount: Joi.number(),
        releaseStatus: Joi.boolean().required(),
        trailer: Joi.string(),
        dimension: Joi.boolean()
    });
    
    let isValidInput = true;
    try {
        await validationSchema.validateAsync(input);
    } catch (error) {
        isValidInput = false;
        response.message = error.details[0]['message'];
    }
    if(!isValidInput) return responses.validationErrorResponseData(res, response.message, 400);

    try {
        let movie = await db.Movie.create(input);
        if(movie) responses.successResponseData(res, { movie }, 1, 'Movie added successfully.', null); 
        else throw 'error';
    } catch (error) {
        responses.errorResponseWithoutData(res, 'Something went wrong. Please try again.', 0, 200);
    }
});

module.exports = { getMovies, getMovie, addMovie };