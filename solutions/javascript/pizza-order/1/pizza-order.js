/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let priceBread;
  switch (pizza){
    case 'Margherita':
        priceBread = 7
        break
    case 'Caprese':
        priceBread = 9
        break
    case 'Formaggio':
        priceBread = 10
        break
  }
  
  const extraOptionPrice = extras.reduce((acc, ele) => {
    if (ele === 'ExtraToppings') {
      acc += 2
    }
    if (ele === 'ExtraSauce') {
      acc += 1
    }
    return acc
  }, 0)
  
  return priceBread+extraOptionPrice
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((acc, ele) => (acc+pizzaPrice(ele.pizza, ...ele.extras))
  , 0)
}
