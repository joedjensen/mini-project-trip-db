const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");


class Trip extends Model {}

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNUll: false,
            primaryKey: true,
            autoIncrement: true
        },
        trip_budget: {
            type: DataTypes.DECIMAL,
            allowNull:false,
        },
        traveller_amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        traveller_id: {
            type: DataTypes.INTEGER,
            unique: false,
            references: {
                model: 'traveller',
                key: 'id'
            }
        },
        location_id: {
            type: DataTypes.INTEGER,
            unique: false,
            references: {
                model: 'traveller',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'trip'
      }
);

module.exports = Trip