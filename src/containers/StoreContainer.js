import React from 'react'

import StoreList from '../components/StoreList'

import { Container } from 'semantic-ui-react'

const StoreContainer = (props) => {
  return (
    <Container>
      <StoreList history={props.history}/>
    </Container>
  )
}

export default StoreContainer
