'use strict'

const Product = use('App/Models/Product')

/**
 * Resourceful controller for interacting with product types
 */
class ProductTypeController {
  /**
   * Show a list of all product types.
   * GET product types
   */
  async index ({ params, request, response, view }) {
    const product = await Product.find(params.products_id)
    const types = await product
      .types()
      .with('image')
      .orderBy('name', 'asc')
      .fetch()

    return types
  }
}

module.exports = ProductTypeController
