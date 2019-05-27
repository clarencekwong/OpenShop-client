import React from 'react'

import { Container } from 'semantic-ui-react'

import CustomerLoginForm from '../components/CustomerLoginForm'
import VendorLoginForm from '../components/VendorLoginForm'

export default class LoginContainer extends React.Component {
  render() {
    return (
      <Container>
        <CustomerLoginForm history={this.props.history}/>
        <VendorLoginForm history={this.props.history}/>
      </Container>
    )
  }
}
