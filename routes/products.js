const { productsServices } = require('../services')
module.exports = [
    {
        method: 'GET',
        path: '/products',
        handler: (request, handler) => {
            return productsServices.getAll(request.query)
        }
    },
    {
        method: 'PATCH',
        path: '/products/{id}',
        handler: (request, handler) => {
            return productsServices.update(request.params.id, request.payload)
        }
    },
    {
        method: 'DELETE',
        path: '/products/{id}',
        handler: (request, handler) => {
            return productsServices.delete(request.params.id)
        }
    }
]