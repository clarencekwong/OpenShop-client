import React from 'react'

import TransactionList from '../components/TransactionList'
import CartAdapter from '../adapters/CartAdapter'
// import UserAdapter from '../adapters/UserAdapter'

import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

class TransactionContainer extends React.Component {

  componentDidMount() {
    if (this.props.user) {
      CartAdapter.fetchTransactions(this.props.user.id)
    }
  }

  render () {
    return (
      <Container>
        <h3>Previous Transactions</h3>
        <TransactionList  />
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps)(TransactionContainer)
