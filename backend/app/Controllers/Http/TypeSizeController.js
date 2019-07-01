'use strict'

const Type = use('App/Models/Type')

/**
 * Resourceful controller for interacting with type sizes
 */
class TypeSizeController {
  /**
   * Show a list of all type sizes.
   * GET type sizes
   */
  async index ({ params, request, response, view }) {
    const type = await Type.find(params.types_id)
    const sizes = await type
      .sizes()
      .with('image')
      .orderBy('base_price', 'desc')
      .fetch()

    return sizes
  }
}

module.exports = TypeSizeController
