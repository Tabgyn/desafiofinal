'use strict'

const User = use('App/Models/User')

class SessionController {
  async store ({ request, response, auth }) {
    const { email, password } = request.all()
    const userType = request.header('UserType')

    const user = await User.findBy('email', email)
    const roles = await user.getRoles()
    if (roles.indexOf(userType) > -1) {
      const token = await auth.attempt(email, password)

      return token
    }

    return response.forbidden(`Usuário '${userType}' não é permitido`)
  }
}

module.exports = SessionController
