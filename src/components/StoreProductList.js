import React from 'react'
import uuid from 'uuid'
import { connect } from 'react-redux'

import { Card } from 'semantic-ui-react'

import StoreProduct from './StoreProduct'

class StoreProductList extends React.Component {

  renderStoreProducts = () => {
    return this.props.storeProducts.sort((a,b) => a.id - b.id).map(product => <StoreProduct key={uuid()} product={product} history={this.props.history}/>)
  }

  render() {
    return (
      <Card.Group itemsPerRow="4">
        {this.renderStoreProducts()}
      </Card.Group>
    )
  }
}

function mapStateToProps(state) {
  return {
    storeProducts: state.stores.storeProducts
  }
}

export default connect(mapStateToProps)(StoreProductList)
