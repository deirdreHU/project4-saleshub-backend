const express = require("express");
const {verifyUser} = require("../../middlewares/verifyAuth");
const {DealNotesController} = require("./deal-notes.controller");
const router = express.Router();

router.post('', verifyUser, DealNotesController.createNote);
router.delete('/:deal_id', DealNotesController.deleteNote);
router.put('/:deal_id', DealNotesController.updateNote);

module.exports = router;