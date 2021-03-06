import React from 'react'
import API_URL from '../config'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

class CustomerRegistrationForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmed_password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    fetch(`${API_URL}/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accepts":"application/json"
      },
      body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(response => {
      if (response.errors) {
				alert(response.errors)
			} else {
				this.props.history.push('/login')
			}
    })
    this.setState({
      name: '',
      email: '',
      password: '',
      confirmed_password: ''
    })
  }

  render() {
    return (
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' textAlign='center'>
              Register a customer account
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input onChange={this.handleChange} fluid name="name" placeholder='Name' value={this.state.name}/>
                <Form.Input onChange={this.handleChange} fluid name="email" placeholder='E-mail address' value={this.state.email}/>
                <Form.Input
                  fluid
                  placeholder='Password'
                  type='password'
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  placeholder='Confirm password'
                  type='password'
                  name="confirmed_password"
                  value={this.state.confirmed_password}
                  onChange={this.handleChange}
                />
                <Button fluid size='large'>
                  Register
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default CustomerRegistrationForm
