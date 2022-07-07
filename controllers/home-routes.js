const router = require('express').Router();
const {Comment, Post, User, Vote } = require('../models')

router.get('/', (req, res) => {

    res.render('homepage', {
    });
})

module.exports = router