'use strict'

class Order {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      zip: 'required',
      street: 'required',
      number: 'required',
      neighborhood: 'required',
      total_price: 'required',
      items: 'required|array',
      'items.*': 'required'
    }
  }
}

module.exports = Order
