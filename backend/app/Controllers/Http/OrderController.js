'use strict'

const Order = use('App/Models/Order')
const OrderItem = use('App/Models/OrderItem')
// const Ws = use('Ws')

/**
 * Resourceful controller for interacting with orders
 */
class OrderController {
  /**
   * Show a list of all orders.
   * GET orders
   */
  async index ({ request, response, view }) {
    const orders = await Order.query()
      .has('items', '>', 0)
      .with('items', builder => {
        builder
          .with('product')
          .with('type', builder => {
            builder.with('image')
          })
          .with('size')
      })
      .with('user', builder => {
        builder.setVisible(['name'])
      })
      .orderBy('created_at', 'desc')
      .fetch()

    return orders
  }

  /**
   * Create/save a new order.
   * POST order
   */
  async store ({ request, auth }) {
    const data = request.only([
      'observation',
      'total_price',
      'zip',
      'street',
      'number',
      'neighborhood'
    ])

    const order = await Order.create({ ...data, user_id: auth.user.id })

    const dataItems = request.only(['items'])

    await Promise.all(
      dataItems.items.map(async item => {
        await OrderItem.create({ ...item, order_id: order.id })
      })
    )

    // const socket = Ws.getChannel('orders').topic('orders')
    // console.log(socket)

    // socket.broadcast('new:order')

    return order
  }
}

module.exports = OrderController
