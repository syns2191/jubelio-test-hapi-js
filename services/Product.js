const Models = require('../models')
const ProductsService = {
    async getAll(params) {
        try {
            let qParams = {
                offset: (Number(params.page) -1) * Number(params.limit),
                limit: Number(params.limit), 
                where: {}
            }

    
            if (params.name) {
                qParams.where.name = {
                    [Models.Sequelize.Op.iLike]: `%${params.name.toLowerCase()}%`
                }
            }
    
            let list = await Models.Products.findAll({
                ...qParams
            })
            let count = await Models.Products.count({
                where: qParams.where
            })
            return {
                total: count,
                data: list
            }
        } catch (error) {
            console.log(error)
        }
    },
    getById(id) {
        return Models.Products.findOne({where: {id: id}})
    },
    update(id,data) {
        console.log(data)
        return Models.Products.update(data, {
            where: {
                id: id
            }
        }) 
    },
    create(data) {
        return Models.Products.create(data)
    },
    delete(id) {
        return Models.Products.destroy({where : {id: id}})
    }
}

module.exports = ProductsService;