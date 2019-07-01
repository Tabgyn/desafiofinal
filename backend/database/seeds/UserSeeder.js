'use strict'

const User = use('App/Models/User')
const Role = use('Adonis/Acl/Role')

class UserSeeder {
  async run () {
    const admin = await Role.create({
      slug: 'administrator',
      name: 'Administrador'
    })

    const client = await Role.create({
      slug: 'client',
      name: 'Cliente'
    })

    const user = await User.create({
      name: 'Tiago Borges',
      email: 'tab@email.com',
      password: '123456'
    })

    await user.roles().attach([admin.id])

    const cliente = await User.create({
      name: 'Diego Deschamps',
      email: 'diego@email.com',
      password: '123456'
    })

    cliente.roles().attach([client.id])
  }
}

module.exports = UserSeeder
