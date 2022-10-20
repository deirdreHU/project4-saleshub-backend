const {getSequelize} = require("../../db");
const {DataTypes} = require("sequelize");

const sequelize = getSequelize();

const DealsModel = sequelize.define('Deal', {
    dealId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    contact: {
        type: DataTypes.INTEGER
    },
    dealStage: {
        type: DataTypes.STRING
    },
    closeDate: {
        type: DataTypes.STRING
    },
    assignedTo: {
        type: DataTypes.INTEGER
    },
    amount: {
        type: DataTypes.FLOAT
    }
    });

    DealsModel.sync();


    module.exports = {
        DealsModel
    }