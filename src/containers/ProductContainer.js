import React from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

import ProductList from '../components/ProductList'
import StoreAdapter from '../adapters/StoreAdapter'

class ProductContainer extends React.Component {

  componentDidMount() {
    if (this.props.selectedStore) {
      return StoreAdapter.getStoreProducts(this.props.selectedStore.id)
    }
    return null
  }

  render() {
    return (
      <Container>
        <h1>{this.props.selectedStore ? this.props.selectedStore.name : null}</h1>
        <ProductList />
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedStore: state.stores.selectedStore
  }
}

export default connect(mapStateToProps)(ProductContainer)
