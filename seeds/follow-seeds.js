const { Follow } = require('../models');

const followdata = [
    {
        "follower_id": 1,
        "following_id": 2
    },
    {
        "follower_id": 1,
        "following_id": 3
    },
    {
        "follower_id": 1,
        "following_id": 4
    },
    {
        "follower_id": 1,
        "following_id": 5
    },
    {
        "follower_id": 2,
        "following_id": 1
    },
    {
        "follower_id": 3,
        "following_id": 1
    },
    {
        "follower_id": 4,
        "following_id": 1
    },
    {
        "follower_id": 5,
        "following_id": 1
    },
    {
        "follower_id": 5,
        "following_id": 4
    },
    {
        "follower_id": 5,
        "following_id": 6
    }
];

const seedFollows = () => Follow.bulkCreate(followdata);

module.exports = seedFollows;