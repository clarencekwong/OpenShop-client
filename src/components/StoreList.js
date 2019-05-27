import React from 'react'
import uuid from 'uuid'
import { connect } from 'react-redux'

import { Card } from 'semantic-ui-react'

import Store from './Store'
import StoreAdapter from '../adapters/StoreAdapter'

class StoreList extends React.Component {

  componentDidMount() {
    StoreAdapter.getStores()
  }

  renderStores = () => {
    return this.props.stores.map(store => <Store key={uuid()} store={store} history={this.props.history}/>)
  }

  render() {
    return (
      <Card.Group itemsPerRow="4">
        {this.renderStores()}
      </Card.Group>
    )
  }
}

function mapStateToProps(state) {
  return {
    stores: state.stores.stores
  }
}

export default connect(mapStateToProps)(StoreList)
