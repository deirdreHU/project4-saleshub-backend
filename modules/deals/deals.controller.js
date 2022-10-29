const {DealsService} = require("./deals.service");

class DealsController {
    constructor() {}

    async getDeals(req, res) {
        try {
            const deals = await DealsService.getDeals();
            res.status(200).json(deals);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    async getDeal(req, res) {
        try {
            const {deal_id} = req.params;
            const deal = await DealsService.getDeal(deal_id);
            res.status(200).json(deal);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    async searchDeals(req, res) {
        try {
            const conditions = req.query;
            const deals = await DealsService.searchDeals(conditions);
            res.status(200).json(deals);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    async createDeal(req, res) {
        try {
            const deal = req.body;
            const dealInstance = await DealsService.createDeal(deal);
            res.status(201).json(dealInstance);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    async deleteDeal(req, res) {
        try {
            const {deal_id} = req.params;
            await DealsService.deleteDeal(deal_id);
            res.status(200).send();
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    async updateDeal(req, res) {
        try {
            const {deal_id} = req.params;
            const dealData = req.body;
            await DealsService.updateDeal(deal_id, dealData);
            res.status(200).send();
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
    }

    module.exports = {
        DealsController: new DealsController()
    }
