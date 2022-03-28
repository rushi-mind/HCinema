const jwt = require('jsonwebtoken');
const responses = require('../controllers/responses');

module.exports = (req, res, next) => {
    let token = req.header('Authorization');
    if(!token) return responses.validationErrorResponseData(res, 'Access denied. Token is not provided.', 400);

    token = token.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        if(!decoded._id) throw 'error';
        req.user = decoded;
        next();
    } catch (error) {
        responses.validationErrorResponseData(res, 'Invalid Auth Token', 400);
    }
}