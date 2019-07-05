import React, { Component } from 'react';
import API_URL from '../config'
import { CardElement, injectStripe } from 'react-stripe-elements';

import CartAdapter from '../adapters/CartAdapter'

import { Table } from 'semantic-ui-react'

class CheckoutForm extends Component {

    componentDidMount() {
        if (localStorage.getItem('order_id')) {
            CartAdapter.getCart(localStorage.getItem('order_id'))
        }
    }

    submit = async (ev) => {
        // User clicked submit
        try {
            let { token } = await this.props.stripe.createToken({ name: "Tester" });
            console.log("Submitting: ", token)
            const data = {
                token_id: token.id
            }
            let response = await fetch(`${API_URL}/api/v1/charge`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Accepts": "application/json",
                },
                body: JSON.stringify(data)
            });

            if (response.ok) console.log("Purchase Complete!")
        } catch (error) {
            throw error
        } 
    }

    render() {
        return (
            <div className="checkout">
                <p>Would you like to complete the purchase?</p>
                <Table unstackable padded textAlign='center'>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><h4>Total</h4></Table.Cell>
                            <Table.Cell><h4>{this.props.order.total_items}</h4></Table.Cell>
                            <Table.Cell><h4>${this.props.order.total_cost}</h4></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <CardElement />
                <button onClick={this.submit}>Send</button>
            </div>
        );
    }
}

export default injectStripe(CheckoutForm);