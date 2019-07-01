'use strict'

const Model = use('Model')

class ProductType extends Model {
  product () {
    return this.belongsTo('App/Models/Product')
  }

  type () {
    return this.belongsTo('App/Models/Type')
  }
}

module.exports = ProductType
