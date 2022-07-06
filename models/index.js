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
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// These associations may need tweaks --->

// --- User follow associations --- //
    
    // not sure where user_id vs followed_user_id

    User.belongsToMany(User, {
        through: Follow,
        as: 'Followers',
        foreignKey: 'user_id'
    })

    User.hasMany(Follow, {
        foreignKey: 'followed_user_id'
    })

// --- User Favorite associations --- //

    User.belongsToMany(Post, {
        through: Favorite,
        as: 'favorite_tracks',
        foreignKey: 'user_id'
    })

    User.hasMany(Favorite, {
        foreignKey: 'user_id'
    })

// ------ End User Associations ------- //



// ------- Post Associations ------ //

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

// These associations may need tweaks

// --- Favorited posts associations --- //

    Post.belongsToMany(User, {
        through: Favorite,
        as: 'favorite_tracks',
        foreignKey: 'post_id'
    })

    Post.hasMany(Favorite, {
        foreignKey: 'post_id'
    })

// ------ End Post Associations ------ //



// ------ Comment Associations ------ //

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

// These associations may need tweaks --->

// --- Voting on comments --- //

    Comment.belongsToMany(User, {
        through: Vote,
        as: 'voted_comments',
        foreignKey: 'comment_id'
    })

    Comment.hasMany(Vote, {
        foreignKey: 'comment_id'
    })

// --- Comment threads --- //

    // May need new model or column
    // to define comment threads (researching)
    
    Comment.belongsTo(Comment, {
        foreignKey: 'comment_id'
    })
    Comment.hasMany(Comment, {
        foreignKey: 'comment_id'
    })

// ------ End Comment Associations ------ //



// ------- Follow associations ------- //

// These associations may need tweaks --->

    Follow.hasMany(User, {
        foreignKey: 'followed_user_id'
    })

    Follow.belongsTo(User, {
        foreignKey: 'user_id'
    })

// ------ End Follow Associations ------ //



// ------ Favorite Associations ------ //

// These associations may need tweaks --->

    Favorite.belongsTo(User, {
        foreignKey: 'user_id'
    })

    Favorite.belongsTo(Post, {
        foreignKey: 'post_id'
    })

// ------ End Favorite Associations ------ //

module.exports = { User, Post, Vote, Comment, Follow, Favorite };