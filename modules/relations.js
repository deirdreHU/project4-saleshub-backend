const {ContactModel} = require("./contacts/contacts.model");
const {NotesModel} = require("./notes/notes.model");
const {UserModel} = require("./users/users.model");
const {DealsModel} = require("./deals/deals.model");
const {DealNotesModel} = require("./deal-notes/deal-notes.model");


async function setRelations() {

    UserModel.hasMany(ContactModel, {foreignKey: 'assignedTo', as: 'contacts'});
    ContactModel.belongsTo(UserModel, {foreignKey: 'assignedTo', targetKey: 'userId'});

    UserModel.hasMany(NotesModel, { foreignKey: 'author'});
    NotesModel.belongsTo(UserModel, {foreignKey: 'author', targetKey: 'userId'});

    ContactModel.hasMany(NotesModel, {foreignKey: 'contact', as: 'notes'});
    NotesModel.belongsTo(ContactModel, {foreignKey: 'contact', targetKey: 'contactId'})

    ContactModel.hasMany(DealsModel, { foreignKey: 'contact', as: 'deals' });
    DealsModel.belongsTo(ContactModel, { foreignKey: 'contact', targetKey: 'contactId' });

    UserModel.hasMany(DealsModel, { foreignKey: 'assignedTo', as: 'deals' });
    DealsModel.belongsTo(UserModel, { foreignKey: 'assignedTo', targetKey: 'userId' });

    DealsModel.hasMany(DealNotesModel, { foreignKey: 'deal', as: 'dealNotes' });
    DealNotesModel.belongsTo(DealsModel, { foreignKey: 'deal', targetKey: 'dealId' });

    UserModel.hasMany(DealNotesModel, { foreignKey: 'author', as: 'dealNotes' });
    DealNotesModel.belongsTo(UserModel, { foreignKey: 'author', targetKey: 'userId' });

    await UserModel.sync({alter:true, force:false});

    await ContactModel.sync({alter:true,force:false});

    await NotesModel.sync({alter:true,force:false});

    await DealsModel.sync({alter:true,force:false});

    await DealNotesModel.sync({alter:true,force:false});

}

module.exports = {
    setRelations
}