const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Follow extends Model {}

Follow.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // These two may need to be tweaked.
        // Not sure if functional
        follower_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        following_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
        // void: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     unique: true,
        // }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'follow'
    }
);

module.exports = Follow;