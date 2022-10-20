const {DealsModel} = require("./deals.model");
const {ContactModel} = require("../contacts/contacts.model");
const {UserModel} = require("../users/users.model");

class DealsService {
    constructor() {}

    async searchDeals(conditions) {
    return DealsModel.findAll({
        include: [
            {
                model: ContactModel
            },
            {
                model: UserModel
            }
        ],
        where: conditions
        })
    }

    async getDeals() {
        return DealsModel.findAll({
        include: [
            {
                model: ContactModel
            },
            {
                model: UserModel
            }
        ]
        })
    }

    async createDeal(deal) {
        return DealsModel.create(deal);
    }

    async deleteDeal(deal_id) {
        return DealsModel.destroy({
        where: {
            dealId: deal_id
        }
        })
    }

    async upodateDeal(deal_id, data) {
        return DealsModel.update(data, {
        where: {
            dealId: deal_id
        }
        })
    }
    }

    module.exports = {
    DealsService: new DealsService()
    }
