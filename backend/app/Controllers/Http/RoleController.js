'use strict'

const Role = use('Adonis/Acl/Role')
const User = use('App/Models/User')

class RoleController {
  async index () {
    const roles = await Role.all()

    return roles
  }

  async show ({ request, auth }) {
    const user = await User.find(auth.user.id)

    return user.getRoles()
  }
}

module.exports = RoleController
