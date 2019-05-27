import React from 'react'

import { Container } from 'semantic-ui-react'

import CustomerRegistrationForm from '../components/CustomerRegistrationForm'
import VendorRegistrationForm from '../components/VendorRegistrationForm'

export default class RegisterContainer extends React.Component {
  render() {
    return (
      <Container>
        <CustomerRegistrationForm history={this.props.history}/>
        <VendorRegistrationForm history={this.props.history}/>
      </Container>
    )
  }
}
