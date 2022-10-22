const {DealNotesModel} = require("./deal-notes.model");

class DealNotesService {
    constructor() {}

    async createNote(note) {
        return DealNotesModel.create(note);
    }
    
    async deleteNote(note_id) {
        return DealNotesModel.destroy({
            where: {
                noteId: note_id
            }
        })
    }
    
    async updateNote(note_id, data) {
        return DealNotesModel.update(data, {
            where: {
                noteId: note_id
            }
        })
    }

}

module.exports = {
    DealNotesService: new DealNotesService()
}