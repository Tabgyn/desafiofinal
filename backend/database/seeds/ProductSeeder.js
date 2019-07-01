'use strict'

const Product = use('App/Models/Product')
const Size = use('App/Models/Size')

class ProductSeeder {
  async run () {
    const pizza = await Product.create({
      name: 'Pizzas',
      description:
        'Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome.',
      preparation_time: '30 mins'
    })

    const pizzaTypes = await pizza.types().createMany([
      {
        name: 'Portuguesa',
        price_factor: 1.2
      },
      {
        name: 'Calabresa',
        price_factor: 1.1
      },
      {
        name: 'Frango Frito',
        price_factor: 1.5
      },
      {
        name: 'Marguerita',
        price_factor: 1.3
      },
      {
        name: 'Napolitana',
        price_factor: 1.4
      },
      {
        name: 'Atum',
        price_factor: 1
      }
    ])

    const pizzaSizes = await Size.createMany([
      { name: 'Tamanho: Pequena', base_price: 29.0 },
      { name: 'Tamanho: Média', base_price: 42.0 },
      { name: 'Tamanho: Grande', base_price: 59.0 },
      { name: 'Tamanho: Gigante', base_price: 76.0 }
    ])

    const sizeIds = await pizzaSizes.map(size => size.id)

    await Promise.all(
      pizzaTypes.map(async type => {
        await type.sizes().attach(sizeIds)
      })
    )
  }
}

module.exports = ProductSeeder
