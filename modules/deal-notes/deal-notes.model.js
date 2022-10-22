const {getSequelize} = require("../../db");
const {DataTypes} = require("sequelize");


const sequelize = getSequelize();

const DealNotesModel = sequelize.define('DealNote', {
    noteId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.STRING
    },
    deal: {
        type: DataTypes.INTEGER
    },
    author: {
        type: DataTypes.INTEGER,
    }
});


DealNotesModel.sync();

module.exports = {
    DealNotesModel
}