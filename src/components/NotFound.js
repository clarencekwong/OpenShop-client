import React from 'react';

import { Container, Loader, Segment, Dimmer, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

const NotFound = (props) => {
  return(
    <Container>
      {!props.loadingStatus ? <Segment>
      <Dimmer active inverted>
        <Loader inverted content='Loading' size='massive'/>
      </Dimmer>
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment> :
        <Container className="not-found-container">
          <h1>Where am I にゃあ‽‽‽</h1>
          <img src="https://httpstatusdogs.com/img/404.jpg" alt="resource not found" />
        </Container>
      }
    </Container>
  )
}

function mapStateToProps(state) {
  return {
    loadingStatus: state.user.loadingStatus
  }
}

export default connect(mapStateToProps)(NotFound)
