const db = require('../../models');
const responses = require('../responses');

const addScreen = (async (req, res) => {
    let input = req.body;
    if(!input) return responses.validationErrorResponseData(res, 'Seats not found.', 400);
    try {
        let screen = await db.Theater.create(input);
        responses.successResponseData(res, { screen }, 1, 'Theater added successfully.', null);
    } catch (error) {
        responses.errorResponseWithoutData(res, 'Something went wrong. Please try again.', 0, 200);
    }
});

const editScreen = (async (req, res) => {
    let _id = req.params.id;
    let input = req.body;
    if(!_id || !input.seats) return responses.validationErrorResponseData(res, 'Invalid input data.', 400);
    
    try {
        let screen = await db.Theater.findOne({ where: { _id } });
        if(!screen) throw 'invalid';
        await db.Theater.update(
            input,
            { where: { _id } }
        );
        responses.successResponseWithoutData(res, 'Theated updated successfully.', 1);
    } catch (error) {
        if(error === 'invalid') responses.errorResponseWithoutData(res, 'Invalid Theater-ID.', 0, 200);
        else responses.errorResponseWithoutData(res, 'Something went wrong. Please try again.', 0, 200);
    }
});

module.exports = { addScreen, editScreen };