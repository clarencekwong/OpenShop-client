import React from 'react'

import { Card, Image, Button, Icon, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'

import ProductAdapter from '../adapters/ProductAdapter'
import StoreAdapter from '../adapters/StoreAdapter'

const StoreProduct = (props) => {
  const handleClick = () => {
    ProductAdapter.fetchProduct(props.product.id)
    .then(() => {
      props.history.push(`/product/${props.product.id}/edit`)
    })
  }

  const handleDelete = () => {
    ProductAdapter.deleteProduct(props.product.id)
    .then(() => {
      StoreAdapter.getStoreProducts(props.myStore.store.id)
    })
  }

  return (
    <div>
      <Card>
        <Image src={props.product.imageUrl} />
        <Card.Content>
          <Card.Header>{props.product.name}</Card.Header>
          <Label basic>
            ${props.product.cost}
          </Label>
          <Card.Description>{props.product.description}</Card.Description>
        </Card.Content>
          <Button color="green" icon onClick={handleClick}>
            <Icon name='edit' />
          </Button>
          <Button color="red" icon onClick={handleDelete}>
            <Icon name='delete' />
          </Button>
      </Card>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    myStore: state.user.vendor
  }
}

export default connect(mapStateToProps)(StoreProduct)
