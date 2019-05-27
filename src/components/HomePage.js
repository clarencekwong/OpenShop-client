import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Container,
  Grid,
  Header,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='OpenShop'
      style={{
        color: "white",
        fontSize: '5em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
      }}
    />
    <Header
      as='h2'
      content='Open your own online store or shop'
      style={{
        color: "#2e86de",
        fontSize: '2.5em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}
    />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
          <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column>
            <Header as='h3' style={{ fontSize: '2em', color: "#2e86de" }}>
              We help Business Owners reach the online market
            </Header>
            <p style={{ fontSize: '1.33em', color: "#2e86de" }}>
              You can open your own e-commerce shop and have customers come to you!
            </p>
            <Header as='h3' style={{ fontSize: '2em', color: "#2e86de" }}>
              We simplify shopping for customers, all stores on one page
            </Header>
            <p style={{ fontSize: '1.33em', color: "#2e86de" }}>
              Yes that's right, no more need to look around!
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em', color: "#2e86de" }}>
              Simple and intuitive e-commerce solution
            </Header>
            <p style={{ fontSize: '1.33em', color: "#2e86de" }}>Make building your online presence easier than ever before</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em', color: "#2e86de" }}>
              Make shopping easy!
            </Header>
            <p style={{ fontSize: '1.33em', color: "#2e86de" }}>
              Browse through all our advertised stores and check them out!
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout
