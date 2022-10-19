const {NotesService} = require("./notes.service");

class NotesController {
    constructor() {}

    async createNote(req, res) {
        const user = req.user;
        const note = req.body;
        note.author = user.id;
        const noteInstance = await NotesService.createNote(note);
        res.status(201).json(noteInstance);
    }

    async updateNote(req, res) {
        const {note_id} = req.params;
        const noteData = req.body;
        await NotesService.updateNote(note_id, noteData);
        res.status(200).send();
    }

    async deleteNote(req, res) {
        const {note_id} = req.params;
        await NotesService.deleteNote(note_id);
        res.status(200).send();
    }
}

module.exports = {
    NotesController: new NotesController()
}