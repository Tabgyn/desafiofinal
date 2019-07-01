'use strict'

const Size = use('App/Models/Size')

/**
 * Resourceful controller for interacting with sizes
 */
class SizeController {
  /**
   * Show a list of all sizes.
   * GET sizes
   */
  async index ({ request, response, view }) {
    const sizes = Size.query()
      .with('image')
      .fetch()

    return sizes
  }

  /**
   * Create/save a new size.
   * POST sizes
   */
  async store ({ request, auth }) {
    const data = request.only(['name', 'base_price'])

    const size = await Size.create({ ...data, user_id: auth.user.id })

    return size
  }
}

module.exports = SizeController
