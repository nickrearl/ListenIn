const router = require('express').Router();
const {Comment, Post, User, Vote } = require('../models')
const sequelize = require('../config/connection')

// router.get('/', (req, res) => {
//     res.render('homepage', {
//     });
// })

router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            attributes: [
                'id',
                'post_url',
                'title',
                'created_at',
                [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
                'vote_count'
                ],
                'iframe'
            ],
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });

        const posts = dbPostData.map((post) =>
            post.get({ plain: true })
        );

        res.render('homepage', {
            posts,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

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