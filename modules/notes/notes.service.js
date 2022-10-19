const {NotesModel} = require("./notes.model");

class NotesService {
    constructor() {}

    async createNote(note) {
        return NotesModel.create(note);
    }

    async deleteNote(note_id) {
        return NotesModel.destroy({
        where: {
            noteId: note_id
        }
        })
    }

    async updateNote(note_id, data) {
        return NotesModel.update(data, {
        where: {
            noteId: note_id
        }
        })
    }
    }

    module.exports = {
        NotesService: new NotesService()
    }
