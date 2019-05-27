import React from 'react'
import uuid from 'uuid'

import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux'

import Transaction from './Transaction'

const TransactionList = (props) => {

  const renderTransaction = () => {
    return props.transactions.map(transaction => <Transaction key={uuid()} transaction={transaction} />)
  }

  return (
    <Table unstackable padded textAlign='center'>
     <Table.Header>
       <Table.Row>
         <Table.HeaderCell>Transaction ID</Table.HeaderCell>
         <Table.HeaderCell>Total Cost</Table.HeaderCell>
       </Table.Row>
     </Table.Header>
     <Table.Body>
       {renderTransaction()}
     </Table.Body>
   </Table>
  )
}

function mapStateToProps(state) {

  return {
    transactions: state.cart.transactions
  }
}

export default connect(mapStateToProps)(TransactionList)
