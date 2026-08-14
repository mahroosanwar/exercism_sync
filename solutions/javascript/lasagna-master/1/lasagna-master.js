/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function cookingStatus(remainingTime) {
 *   ...
 * }
 */

export function cookingStatus(remTime) {
  if (remTime == 0) {
    return 'Lasagna is done.'
  } else if (remTime === undefined) {
    return 'You forgot to set the timer.'
  } else {
    return 'Not done, please wait.'
  }
}

export function preparationTime(layers, avgTime = 2) {
  return layers.length * avgTime
}

export function quantities(layers) {
  const total = {noodles: 0, sauce: 0}
  for(let i=0; i<layers.length; i++) {
    if (layers[i] === 'sauce') {
      total.sauce += 0.2
    } else if(layers[i] === 'noodles'){
      total.noodles += 50
    }
  }
  return total
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList.at(-1))
}

export function scaleRecipe(recipe, people) {
  const totalAmount = {}

  for(let key in recipe) {
    totalAmount[key] = (recipe[key]/2)*people
  }
  return totalAmount
}


