import React, { Component } from 'react';

import './App.css';
import HomePage from './components/HomePage'
import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer'
import StoreContainer from './containers/StoreContainer'
import StoreForm from './components/StoreForm'
import EditForm from './components/EditForm'
import ProductContainer from './containers/ProductContainer'
import StoreProductContainer from './containers/StoreProductContainer'
import TransactionContainer from './containers/TransactionContainer'
import CartContainer from './containers/CartContainer'
import DashboardContainer from './containers/DashboardContainer'
import StripeContainer from './containers/StripeContainer'
import ProductForm from './components/ProductForm'
import NotFound from './components/NotFound'
import UserAdapter from './adapters/UserAdapter'
import oslogo from './assets/openshop_logo.png'

import 'semantic-ui-css/semantic.min.css'
import { Menu, Image, Icon } from "semantic-ui-react"
import { Route, Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends Component {
  state = {}

  componentDidMount() {
    if (localStorage.getItem('user_id')) {
      UserAdapter.autoLoginUser()
      UserAdapter.logUser()
    }
    if (localStorage.getItem('vendor_id')) {
      UserAdapter.autoLoginVendor()
      UserAdapter.logUser()
    }
  }

  handleLogOut() {
    localStorage.clear()
    UserAdapter.logUserOut()
    UserAdapter.resetStoreToggle()
  }

  render() {
    const jwtUser = localStorage.getItem('user_id')
    const jwtVendor = localStorage.getItem('vendor_id')
    return (
      <div className="App">
        <Menu fixed="top">
          <Menu.Item as={Link} to="/">
            <Image size="mini" src={oslogo} />
          </Menu.Item>
          { jwtVendor ? null : <Menu.Item as={Link} to="/stores" content="Stores" />}
          { this.props.storeCreated ? null : <Menu.Item as={Link} to="/stores/new" content="Create Stores" />}
          { jwtVendor ?
            <React.Fragment>
              <Menu.Item as={Link} to="/product/new" content="Create Product" />
              <Menu.Item as={Link} to="/product" content="My Products" />
            </React.Fragment>
            : null
          }
          <Menu.Menu position="right">
            { jwtUser ? <Menu.Item as={Link} to="/transactions" content="Transactions" /> : null}
            { jwtVendor ? <Menu.Item as={Link} to="/dashboard" content="Dashboard" /> : null}
            { jwtVendor ? null :
            <React.Fragment>
              <Menu.Item as={Link} to="/cart">
                <Icon name="shopping cart" />
              </Menu.Item>
            </React.Fragment>
            }
            { this.props.logged_in ?
              null :
              <React.Fragment>
                <Menu.Item as={Link} to="/login" content="Log In" />
                <Menu.Item as={Link} to="/register" content="Register" />
              </React.Fragment>
            }
            { this.props.logged_in ? <Menu.Item as={Link} to="/" onClick={this.handleLogOut} content="Log Out" /> : null }
          </Menu.Menu>
        </Menu>
        <Switch>
          <Route path="/stores" exact component={StoreContainer} />
          <Route path="/stores/new" component={StoreForm} />
          <Route path="/product" exact component={StoreProductContainer} />
          <Route path="/cart" component={CartContainer} />
          <Route path="/checkout" component={StripeContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/dashboard" component={DashboardContainer} />
          <Route path="/register" component={RegisterContainer} />
          <Route path="/transactions" component={TransactionContainer} />
          {this.props.selectedStore ? <Route path={`/${this.props.selectedStore.name}`} component={ProductContainer} /> : null}
          <Route path="/product/:id/edit" component={EditForm} />
          <Route path="/product/new" component={ProductForm} />
          <Route path="/" exact component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedStore: state.stores.selectedStore,
    logged_in: state.user.logged_in,
    storeCreated: state.user.storeCreated,
    vendor: state.user.vendor
  }
}

export default connect(mapStateToProps)(App)
