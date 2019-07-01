'use strict'

const Model = use('Model')

class Order extends Model {
  items () {
    return this.hasMany('App/Models/OrderItem')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Order
