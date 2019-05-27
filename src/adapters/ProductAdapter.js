import store from '../store'

class ProductAdapter {
  static PRODUCT_URL = 'http://localhost:3000/api/v1/products'

  static fetchProduct(product_id) {
    return fetch(`${this.PRODUCT_URL}/${product_id}`)
      .then(res => res.json())
      .then(product => {
        store.dispatch({type: 'FETCH_PRODUCT', payload: product})
      })
  }

  static deleteProduct(product_id) {
    return fetch(`${this.PRODUCT_URL}/${product_id}`, {
      method: "DELETE"
    })
  }
}

export default ProductAdapter
