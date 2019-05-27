import store from '../store'
import API_URL from '../config'

class CartAdapter {
  static ORDER_URL = `${API_URL}/api/v1/orders`
  static TRANSACTION_URL = `${API_URL}/api/v1/transactions`

  static getCart(order_id) {
    return fetch(`${this.ORDER_URL}/${order_id}`)
      .then(res => res.json())
      .then(cart => {
        store.dispatch({type: 'FETCH_CART', payload: cart})
      })
  }

  static submitCart() {
    store.dispatch({type: 'SUBMIT_CART'})
  }

  static createTransactions(data) {
    fetch (`${this.TRANSACTION_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accepts':'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  static fetchTransactions(user_id) {
    console.log('fetching transactions')
    fetch (`${this.TRANSACTION_URL}`)
    .then(res => res.json())
    .then(transactions => {
      const userTransactions = transactions.filter(transaction => transaction.user_id === user_id)
      store.dispatch({type: 'FETCH_TRANSACTION', payload: userTransactions})
    })
  }
}

export default CartAdapter
