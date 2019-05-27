import React from 'react'

import StoreProductList from '../components/StoreProductList'
import StoreAdapter from '../adapters/StoreAdapter'

import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

class StoreProductContainer extends React.Component {

  componentDidMount() {
    if (this.props.myStore) {
      StoreAdapter.getStoreProducts(this.props.myStore.store.id)
    }
  }

  render() {
    return (
      <Container>
        <StoreProductList history={this.props.history}/>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    myStore: state.user.vendor
  }
}

export default connect(mapStateToProps)(StoreProductContainer)
