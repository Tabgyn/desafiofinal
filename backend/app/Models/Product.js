'use strict'

const Model = use('Model')

class Product extends Model {
  types () {
    return this.belongsToMany('App/Models/Type').pivotModel(
      'App/Models/ProductType'
    )
  }

  image () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Product
