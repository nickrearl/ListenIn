const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {
    static upvote(body, models) {
        return models.Vote.create({
            user_id: body.user_id,
            comment_id: body.comment_id
        }).then(() => {
            return Comment.findOne({
                where: {
                    id: body.comment_id
                },
                attributes: [
                    'id',
                    'comment_text',
                    'user_id',
                    'post_id',
                    'comment_id',
                    'created_at',
                    [
                        sequelize.literal('(SELECT COUNT(*) FROM vote WHERE comment.id = vote.comment_id)'),
                        'vote_count'
                    ]
                ]
            });
        });
    }
}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'post',
                key: 'id'
            }
        },
        comment_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'comment',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;