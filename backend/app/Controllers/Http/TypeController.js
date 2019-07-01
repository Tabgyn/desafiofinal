'use strict'

const Type = use('App/Models/Type')

/**
 * Resourceful controller for interacting with types
 */
class TypeController {
  /**
   * Show a list of all types.
   * GET types
   */
  async index ({ request, response, view }) {
    const types = Type.query()
      .with('image')
      .fetch()

    return types
  }

  /**
   * Create/save a new type.
   * POST types
   */
  async store ({ request, auth }) {
    const data = request.only(['name', 'price_factor'])

    const type = await Type.create({ ...data, user_id: auth.user.id })

    const dataSizes = request.only(['sizes'])

    type.sizes().attach(dataSizes)

    return type
  }
}

module.exports = TypeController
