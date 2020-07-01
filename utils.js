// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  // should return the area
}

const perimeter = (w, h) => {
  // should return the perimeter
}

const circleArea = r => {
  // should return the area of the circle
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.splice(0, shoppingCart.length)
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  return shoppingCart
}

const addItemToCart = (item) => {
  shoppingCart.push(item)
}

const getNumItemsInCart = () => {
  return shoppingCart.length
}

const removeItemFromCart = (item) => {
  const index = shoppingCart.indexOf(item);
  if (index > -1)
  {
      shoppingCart.pop(index)
  }
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
