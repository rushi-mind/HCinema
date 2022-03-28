const db = require('../../models');
const responses = require('../responses');

const getProfile = (async (req, res) => {
    let { _id } = req.user;

    try {
        let user = await db.User.findOne({
            attributes: [
                '_id', 'firstName', 'lastName', 'email', 'profileImage'
            ],
            where: { _id }
        });
        
        if(user.profileImage) user.dataValues.profileImage = `${process.env.URL}/profile-images/${user.profileImage}`;
        else user.dataValues.profileImage = `${process.env.URL}/profile-images/default.png`;
        
        responses.successResponseData(res, { user }, 1, 'Profile fetched successfully', null);
    } catch (error) {
        console.log(error);
        responses.errorResponseWithoutData(res, 'Something went wrong. Please try again.', 0, 200);
    }
});

module.exports = { getProfile };