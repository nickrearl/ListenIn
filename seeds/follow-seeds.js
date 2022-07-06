const { Follow } = require('../models');

const followdata = [
    {
        "user_id": 1,
        "followed_user_id": 2
    },
    {
        "user_id": 1,
        "followed_user_id": 3
    },
    {
        "user_id": 1,
        "followed_user_id": 4
    },
    {
        "user_id": 1,
        "followed_user_id": 5
    },
    {
        "user_id": 2,
        "followed_user_id": 1
    },
    {
        "user_id": 3,
        "followed_user_id": 1
    },
    {
        "user_id": 4,
        "followed_user_id": 1
    },
    {
        "user_id": 5,
        "followed_user_id": 1
    },
    {
        "user_id": 5,
        "followed_user_id": 4
    },
    {
        "user_id": 5,
        "followed_user_id": 6
    }
];

const seedFollows = () => Follow.bulkCreate(followdata);

module.exports = seedFollows;