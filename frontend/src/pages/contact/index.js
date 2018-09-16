import React from 'react'

import { withAlert } from 'react-alert'
import { Mutation } from 'react-apollo'

import Container from './components/container'
import ContactForm from './components/form'

import { CREATE_MESSAGE } from './mutations/create-message'


export const Contact = ({ alert }) => (
  <Mutation
    mutation={CREATE_MESSAGE}
    onCompleted={() => alert.success('Message sent!')}
    onError={error => alert.error('Could not send message: '+ error.message)}
  >
    {(createMessage, { loading, error }) => (
      <Container>
        <ContactForm onSubmit={(variables) => createMessage({variables})} />
      </Container>
    )}
  </Mutation>
)


export default withAlert(Contact)
