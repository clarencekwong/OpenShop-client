import React from 'react'
import TotalVolume from '../components/TotalVolume'
import DashboardProductList from '../components/DashboardProductList'

import { Grid, Container } from 'semantic-ui-react'

class DashboardContainer extends React.Component {

  render () {
    return (
      <Container>
        <Grid celled='internally' columns='equal' stackable>
          {<TotalVolume />}
          <Grid.Row textAlign='center'>
            <DashboardProductList />
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default DashboardContainer
