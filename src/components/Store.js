import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import StoreAdapter from '../adapters/StoreAdapter'

const Store = (props) => {

  const handleClick = () => {
    StoreAdapter.selectStore(props.store, props.history)
    localStorage.setItem('store_id', props.store.id)
  }

  return (
    <div>
      <Card onClick={handleClick}>
        <Image src={props.store.imageUrl} />
        <Card.Content>
          <Card.Header>{props.store.name}</Card.Header>
        </Card.Content>
      </Card>
    </div>
  )
}

export default Store
