const {getSequelize} = require("../../db");
const {DataTypes, Deferrable} = require("sequelize");
// const {UserModel} = require("../users/users.model");

const sequelize = getSequelize();

const NotesModel = sequelize.define('Note', {
    noteId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.STRING
    },
    author: {
        type: DataTypes.INTEGER,
    }
});


module.exports = {
    NotesModel
}