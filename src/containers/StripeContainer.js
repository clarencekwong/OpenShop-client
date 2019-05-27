import React from 'react'
import { Container, Segment } from 'semantic-ui-react'
import CardDemo from '../components/StripTest'

class StripeContainer extends React.Component {
  render () {
    return(
      <Container>
        <Segment className="payment">
          <CardDemo />
        </Segment>
      </Container>
    )
  }
}

export default StripeContainer;
