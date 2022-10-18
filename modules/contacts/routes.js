const express = require("express");
const {verifyUser} = require("../../middlewares/verifyAuth");
const {ContactsController} = require("./contacts.controller");

const router = express.Router();

router.get('', ContactsController.getContacts);
router.get('/search', ContactsController.searchContact);
router.post('', verifyUser, ContactsController.createContact);
router.get('/:contact_id', ContactsController.getContact);
router.delete('/:contact_id', ContactsController.deleteContact);
router.put('/:contact_id', ContactsController.updateContact);

module.exports = router;
