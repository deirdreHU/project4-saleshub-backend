const express = require("express");
const {verifyUser} = require("../../middlewares/verifyAuth");
const {DealsController} = require("./deals.controller");

const router = express();

router.post('', verifyUser, DealsController.createDeal);
router.get('', DealsController.getDeals);
router.get('/search', DealsController.searchDeals);
router.delete('/:deal_id', DealsController.deleteDeal);
router.put('/:deal_id', DealsController.updateDeal);
router.get('/:deal_id', DealsController.getDeal);

module.exports = router;
