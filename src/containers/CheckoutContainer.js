import React from 'react'

import { Elements } from 'react-stripe-elements';
import CheckoutForm from '../components/CheckoutForm'

import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

class CheckoutContainer extends React.Component {

    render () {
        return (
            <Container className="Checkout">
                <Elements>
                    <CheckoutForm order={this.props.order} history={this.props.history}/>
                </Elements>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        order: state.cart.cart
    }
}

export default connect(mapStateToProps)(CheckoutContainer)
