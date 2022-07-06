const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');
const Comment = require('./Comment');
const Favorite = require('./Favorite');
const Follow = require('./Follow');

// ------ User associations ------ //
User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// These associations may need tweaks
User.hasMany(Follow, {
    foreignKey: 'user_id'
})

User.belongsToMany(Post, {
    though: Favorite,
    as: 'favorite_tracks',
    foreignKey: 'user_id'
})

User.hasMany(Favorite, {
    foreignKey: 'user_id'
})

// ------- Post Associations ------ //
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

// These associations may need tweaks
Post.belongsToMany(User, {
    through: Favorite,
    as: 'favorite_tracks',
    foreignKey: 'post_id'
})

Post.hasMany(Favorite, {
    foreignKey: 'post_id'
})


module.exports = { User, Post, Vote, Comment, Favorite, Follow };