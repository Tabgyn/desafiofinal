'use strict'

const Role = use('Adonis/Acl/Role')
const User = use('App/Models/User')

class UserController {
  /**
   * Create/save a new user.
   * POST users
   */
  async store ({ request }) {
    const data = request.only(['name', 'email', 'password'])
    const slug = request.only(['role'])
    const user = await User.create({ ...data })
    const role = await Role.findBy('slug', slug.role)

    user.roles().attach([role.id])

    return user
  }
}

module.exports = UserController
