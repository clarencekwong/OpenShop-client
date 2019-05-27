import React from 'react'
import { Table } from 'semantic-ui-react'

const Cart = ({ cart }) => {
  const { quantity, product } = cart

  return (
    <Table.Row>
      <Table.Cell>{product.name}</Table.Cell>
      <Table.Cell>{quantity}</Table.Cell>
      <Table.Cell>${product.cost * quantity}</Table.Cell>
    </Table.Row>
  )
}

export default Cart
