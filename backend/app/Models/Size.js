'use strict'

const Model = use('Model')

class Size extends Model {
  image () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Size
