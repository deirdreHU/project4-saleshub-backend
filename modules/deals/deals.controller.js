const {DealsService} = require("./deals.service");

class DealsController {
    constructor() {}


    async getDeals(req, res) {
        const deals = await DealsService.getDeals();
        res.status(200).json(deals);
    }

    async searchDeals(req, res) {
        const conditions = req.query;
        const deals = await DealsService.searchDeals(conditions);
        res.status(200).json(deals);
    }

    async createDeal(req, res) {
        const deal = req.body;
        const dealInstance = await DealsService.createDeal(deal);
        res.status(201).json(dealInstance);
    }

    async deleteDeal(req, res) {
        const {deal_id} = req.params;
        await DealsService.deleteDeal(deal_id);
        res.status(200).send();
    }

    async updateDeal(req, res) {
        const {deal_id} = req.params;
        const dealData = req.body;
        await DealsService.upodateDeal(deal_id, dealData);
        res.status(200).send();
    }
    }

    module.exports = {
        DealsController: new DealsController()
    }
