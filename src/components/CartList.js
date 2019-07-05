import React from 'react'
import uuid from 'uuid'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import API_URL from '../config'

import { Table, Button } from 'semantic-ui-react'

import Cart from './Cart'
import CartAdapter from '../adapters/CartAdapter'

class CartList extends React.Component {

  componentDidMount() {
    if (localStorage.getItem('order_id')) {
      CartAdapter.getCart(localStorage.getItem('order_id'))
    }
  }

  renderCarts = () => {
    return this.props.cart.map(cart => <Cart key={uuid()} cart={cart}/>)
  }

  handleDelete = () => {
    fetch(`${API_URL}/api/v1/orders/${localStorage.getItem('order_id')}`, {
      method: 'DELETE'
    })
    .then(() => {
      localStorage.removeItem('order_id')
      CartAdapter.submitCart()
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.props.cart ?
          <React.Fragment>
             <Table unstackable padded textAlign='center'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Product</Table.HeaderCell>
                  <Table.HeaderCell>Quantity</Table.HeaderCell>
                  <Table.HeaderCell>Cost</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.renderCarts()}
                <Table.Row>
                  <Table.Cell><h4>Total</h4></Table.Cell>
                  <Table.Cell><h4>{this.props.order.total_items}</h4></Table.Cell>
                  <Table.Cell><h4>${this.props.order.total_cost}</h4></Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Button as={Link} to="/checkout" style={{float:"right"}} >Check Out</Button>
            <Button as={Link} to="/" style={{float:"right"}} onClick={this.handleDelete}>Delete Cart</Button>
          </React.Fragment> :
          <React.Fragment>
            <h3>Cart is empty</h3>
          </React.Fragment>
        }
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart.items,
    order: state.cart.cart
  }
}

export default connect(mapStateToProps)(CartList)
