const express = require("express");
const {verifyUser} = require("../../middlewares/verifyAuth");
const {DealNotesController} = require("./deal-notes.controller");
const router = express.Router();

router.post('', verifyUser, DealNotesController.createNote);
router.delete('/:note_id', DealNotesController.deleteNote);
router.put('/:note_id', DealNotesController.updateNote);

module.exports = router;