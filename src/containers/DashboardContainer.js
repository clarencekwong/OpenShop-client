import React from 'react'
import TotalVolume from '../components/TotalVolume'
import DashboardProductList from '../components/DashboardProductList'

import { Grid, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

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

function mapStateToProps(state) {
  return {
    vendor: state.user.vendor
  }
}

export default connect(mapStateToProps)(DashboardContainer)
