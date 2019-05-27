const initialStoreState = {
  stores: [],
  storeProducts: [],
  selectedStore: null
}

function storeReducer(state = initialStoreState, action) {
  switch (action.type) {
    case "FETCH_STORE":
      return {...state, stores: action.payload}
    case "FETCH_STORE_PRODUCTS":
      return {...state, storeProducts: action.payload}
    case "SELECT_STORE":
      return {...state, selectedStore: action.payload}
    case "FETCH_PRODUCT":
      return {...state, product: action.payload}
    default:
      return state
  }
}

export default storeReducer
