import React from 'react'
import uuid from 'uuid'

import DashboardProduct from './DashboardProduct'

import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux'

class DashboardProductList extends React.Component {

  renderProduct = () => {
    return this.props.storeOrders.map(order => <DashboardProduct key={uuid()} order={order}/>)
  }

  render () {
    return (
      <Table unstackable padded textAlign='center'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product</Table.HeaderCell>
            <Table.HeaderCell>Total Volume Sold</Table.HeaderCell>
            <Table.HeaderCell>Total Sale</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.renderProduct()}
        </Table.Body>
      </Table>
    )
  }
}

function mapStateToProps(state) {
  return {
    storeOrders: state.user.storeOrders
  }
}

export default connect(mapStateToProps)(DashboardProductList)
