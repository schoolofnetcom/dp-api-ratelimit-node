const Router = require('express').Router;
const expressRateLimit = require('express-rate-limit');

const router = Router();

const rateLimit = expressRateLimit({
    max: 2,
    windowMs: 1 * 60 * 1000,
    message: 'To many request from this IP'
});


router.get('/hello', rateLimit, async(req, res) => {
    console.log('Break point here...');
    return res.json({ msg: 'Hello from api path' });
});

module.exports = router;