import React from 'react'
import { Form, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

import UserAdapter from '../adapters/UserAdapter'

class StoreForm extends React.Component {
  state = {
    name: '',
    photo: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFileChange = (e) => {
    this.setState({
      photo: e.target.files[0]
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', this.state.name)
    formData.append('vendor_id', this.props.vendor.id)
    formData.append('photo', this.state.photo)
    fetch("http://localhost:3000/api/v1/stores", {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(res => {
      if (res.id) {
        UserAdapter.storeCreated(true)
        UserAdapter.setVendor(res.vendor.id)
        .then(() => this.props.history.push('/'))
      } else {
        alert('Please make sure to leave nothing blank.')
      }
    })
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input onChange={this.handleChange} fluid name="name" label='Store name' placeholder='Store name' />
          <Form.Input onChange={this.handleFileChange} name="photo" fluid type="file" label='Store Image' />
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    vendor: state.user.vendor
  }
}

export default connect(mapStateToProps)(StoreForm);
