const {DealNotesService} = require("./deal-notes.service");


class DealNotesController {
    constructor() {}

    async createNote(req, res) {
        const user = req.user;
        const note = req.body;
        note.author = user.id;
        const noteInstance = await DealNotesService.createNote(note);
        res.status(201).json(noteInstance);
    }

    async updateNote(req, res) {
        const {note_id} = req.params;
        const noteData = req.body;
        await DealNotesService.updateNote(note_id, noteData);
        res.status(200).send();
    }

    async deleteNote(req, res) {
        const {note_id} = req.params;
        await DealNotesService.deleteNote(note_id);
        res.status(200).send();
    }
}

module.exports = {
    DealNotesController: new DealNotesController()
}