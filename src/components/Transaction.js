import React from 'react'

import { Table } from 'semantic-ui-react'

const Transaction = (props) => {
  return (
    <Table.Row>
      <Table.Cell>{props.transaction.id}</Table.Cell>
      <Table.Cell>${props.transaction.total}</Table.Cell>
    </Table.Row>
  )
}

export default Transaction
