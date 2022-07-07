const router = require('express').Router();
const {Comment, Post, User, Vote } = require('../models')

router.get('/', (req, res) => {

    res.render('homepage', {
    });
})

router.get('/login', (req, res) => {

    res.render('login', {
    });
})

router.get('/post/:id', (req, res) => {
    //handlebars page that displays post and all comments on it
})

router.get('/user/:id', (req, res) => {
    //handlebars page that displays user and all their posts
})

module.exports = router