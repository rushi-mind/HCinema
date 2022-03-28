const router = require('express').Router();

const adminRouter = require('./admin');
const userRouter = require('./users');

router.use('/api/admin', adminRouter);
router.use('/api', userRouter);

module.exports = router;