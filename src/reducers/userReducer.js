const initialUserState = {
  user: null,
  orders: [],
  logged_in: false,
  vendor: null,
  storeCreated: true,
  storeOrders: [],
  loadingStatus: false
}

function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case "FETCH_USER_ORDER":
      return {...state, orders: action.payload}
    case "SET_USER":
      return {...state, user: action.payload}
    case "SET_VENDOR":
      return {...state, vendor: action.payload}
    case "LOG_USER":
      return {...state, logged_in: true}
    case "LOGOUT_USER":
      return {...state, logged_in: false}
    case "STORE_CREATED":
      return {...state, storeCreated: action.payload}
    case "STORE_RESET":
      return {...state, storeCreated: true}
    case "STORE_ORDER":
      return {...state, storeOrders: action.payload}
    case "LOADING_NOW":
      return {...state, loadingStatus: false}
    case "DONE_LOADING":
      return {...state, loadingStatus: true}
    default:
      return state
  }
}

export default userReducer
