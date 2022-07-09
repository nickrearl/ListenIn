const router = require('express').Router();
const {Comment, Post, User, Vote } = require('../models')
const sequelize = require('../config/connection')

router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            attributes: [
                'id',
                'post_url',
                'title',
                'user_id',
                'created_at',
                [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
                'vote_count'
                ],
                'iframe'
            ],
            // This orders by vote count
            // order: [[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'DESC']],
            order: [['created_at', 'DESC']],
            include: [
                    {       
                        model: Comment,
                        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                        include: {
                            model: User,
                            attributes: ['username']
                        }
                    },
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
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('login');
})

router.get('/logout', (req, res) => {
    
})

router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_url',
            'title',
            'thumbnail',
            'iframe',
            'created_at',
            'user_id',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: "No post found with this id" });
            return;
        }

        const post = dbPostData.get({ plain: true });
        
        res.render('single-post', {
            post,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

})


router.get('/u/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'username',
            'profilePic',
            'anthem',
            [sequelize.literal('(SELECT COUNT(*) FROM favorite WHERE user.id = favorite.user_id)'), 'favorite_count'],
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE user.id = vote.user_id)'), 'vote_count'],
            [sequelize.literal('(SELECT COUNT(*) FROM follow WHERE user.id = follow.followed_user_id)'), 'follower_count']
        ],
        include: [
            {
                model: Post, 
                attributes: [
                    'id',
                    'post_url',
                    'title',
                    'user_id',
                    'created_at',
                    [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE posts.id = vote.post_id)'),
                    'vote_count'
                    ],
                    'iframe'
                ],
                order: [[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE posts.id = vote.post_id)'), 'DESC']],
                include: [
                    {
                        model: Comment,
                        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                        include: {
                            model: User,
                            attributes: ['username']
                        }
                    },
                ]
            },
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'created_at'
                ],
                include: {
                    model: Post,
                    attributes: ['title']
                }
            },
            {
                model: Post,
                attributes: ['title'],
                through: Vote,
                as: 'voted_posts'
            },
            // May need tweaks --->
            // {
            //     model: Post,
            //     attributes: ['title'],
            //     through: Favorite,
            //     as: 'favorite_tracks'
            // },
            // {
            //     model: User,
            //     attributes: ['Username'],
            //     through: Follow,
            //     // 'followers' or 'followed_users'?
            //     as: 'followers?'
            // }
        ]
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        
        const user = dbUserData.get({ plain: true });
        var current_user = req.user;
        res.render('profile-page', {
            user,
            loggedIn: req.session.loggedIn
        })
    })

    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router