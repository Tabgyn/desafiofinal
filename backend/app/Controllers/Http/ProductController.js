'use strict'

const Product = use('App/Models/Product')

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   */
  async index () {
    const products = await Product.query()
      .with('image')
      .fetch()

    return products
  }

  /**
   * Create/save a new product.
   * POST products
   */
  async store ({ request }) {
    const data = request.only(['name', 'description', 'preparation_time'])

    const product = await Product.create({ ...data })

    const dataTypes = request.only(['types'])

    product.types().attach(dataTypes)

    return product
  }
}

module.exports = ProductController
