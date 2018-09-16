import React from 'react'
import PropTypes from 'prop-types'

import { Form } from 'semantic-ui-react'

import './form.css'


class ContactForm extends React.Component {
  initialState = {name: '', email: '', subject: '', text: ''}
  state = this.initialState

  onChange = (e, {name, value}) => this.setState({ [name]: value })

  onSubmit = () => {
    const { onSubmit } = this.props
    onSubmit(this.state)
    this.setState(this.initialState)
  }

  isDisabled = () => {
    const { name, email, subject, text } = this.state
    const isNull = ['', null, undefined]

    if (isNull.includes(name)) return true
    else if (isNull.includes(email)) return true
    else if (isNull.includes(subject)) return true
    else if (isNull.includes(text)) return true
    else return false
  }

  render() {
    const { name, email, subject, text } = this.state
    return (
      <Form className="Contact-form" onSubmit={this.onSubmit}>
        <Form.Input
          name="name"
          icon="user outline"
          iconPosition="left"
          size="huge"
          placeholder="Your name"
          onChange={this.onChange}
          value={name}
        />
        <Form.Input
          name="email"
          icon="mail square"
          iconPosition="left"
          size="huge"
          placeholder="Your Email"
          onChange={this.onChange}
          value={email}
        />
        <Form.Input
          name="subject"
          icon="clipboard outline"
          iconPosition="left"
          size="huge"
          placeholder="Subject"
          onChange={this.onChange}
          value={subject}
        />
        <Form.TextArea
          name="text"
          rows={6}
          placeholder="Your message"
          onChange={this.onChange}
          value={text}
        />
        <Form.Button
          style={{ marginTop: '20px' }}
          floated="left"
          content="Send"
          size="huge"
          disabled={this.isDisabled()}
          color="vk"
        />
      </Form>
    )
  }
}


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}


export default ContactForm
