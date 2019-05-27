import React from 'react'
import uuid from 'uuid'

import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

import Product from './Product'

class ProductList extends React.Component {

  renderProducts = () => {
    if (this.props.storeProducts && this.props.selectedStore) {
      return this.props.storeProducts.sort((a,b) => a.id - b.id).map(product => <Product key={uuid()} product={product}/>)
    }
    return null
  }

  render() {
    return (
      <Card.Group itemsPerRow="4">
        {this.renderProducts()}
      </Card.Group>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedStore: state.stores.selectedStore,
    storeProducts: state.stores.storeProducts
  }
}

export default connect(mapStateToProps)(ProductList)
