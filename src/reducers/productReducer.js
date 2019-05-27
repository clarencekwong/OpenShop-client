const initialProductState = {
  product: []
}

function productReducer(state = initialProductState, action) {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return {...state, product: action.payload}
    default:
      return state
  }
}

export default productReducer
