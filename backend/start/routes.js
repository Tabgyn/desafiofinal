'use strict'

const Route = use('Route')

Route.post('sessions', 'SessionController.store').validator('Session')
Route.post('users', 'UserController.store').validator('User')
Route.get('files/:id', 'FileController.show')

Route.group(() => {
  Route.get('roles', 'RoleController.index')
  Route.get('userroles', 'RoleController.show')
  Route.resource('orders', 'OrderController')
    .apiOnly()
    .validator(new Map([[['orders.store'], 'Order']]))
  Route.resource('userorders', 'UserOrderController').apiOnly()
  Route.resource('products', 'ProductController').apiOnly()
  Route.resource('products.types', 'ProductTypeController').apiOnly()
  Route.resource('types', 'TypeController').apiOnly()
  Route.resource('types.sizes', 'TypeSizeController').apiOnly()
  Route.resource('sizes', 'SizeController').apiOnly()
  Route.post('files', 'FileController.store')
}).middleware('auth')
