const initialCartState = {
  cart: [],
  order: null,
  transactions: []
}

function cartReducer(state = initialCartState, action) {
  switch (action.type) {
    case "FETCH_CART":
      return {...state, cart: action.payload}
    case "FETCH_TRANSACTION":
      return {...state, transactions: action.payload}
    case "SUBMIT_CART":
      return {...state, cart: []}
    default:
      return state
  }
}

export default cartReducer
