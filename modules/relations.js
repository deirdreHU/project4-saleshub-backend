const {ContactModel} = require("./contacts/contacts.model");
const {NotesModel} = require("./notes/notes.model");
const {UserModel} = require("./users/users.model");


async function setRelations() {

    await UserModel.sync({force: true});

    await ContactModel.sync({force: true});

    await NotesModel.sync({force: true});

    UserModel.hasMany(ContactModel, {foreignKey: 'assignedTo', as: 'contacts'});
    ContactModel.belongsTo(UserModel, {foreignKey: 'assignedTo', targetKey: 'userId'});

    UserModel.hasMany(NotesModel, { foreignKey: 'author' });
    NotesModel.belongsTo(UserModel, {foreignKey: 'author', targetKey: 'userId'});

    ContactModel.hasMany(NotesModel, {foreignKey: 'contact', as: 'notes'});
    NotesModel.belongsTo(ContactModel, {foreignKey: 'contact', targetKey: 'contactId'})

}

module.exports = {
    setRelations
}