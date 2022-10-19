const express = require("express");
const {verifyUser} = require("../../middlewares/verifyAuth");
const {NotesController} = require("./notes.controller");

const router = express();

router.post('', verifyUser, NotesController.createNote);
router.delete('/:note_id', NotesController.deleteNote);
router.put('/:note_id', NotesController.updateNote);

module.exports = router;