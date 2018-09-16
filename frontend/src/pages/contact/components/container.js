import React from 'react'

import DocumentTitle from 'react-document-title'
import { Container, Header } from 'semantic-ui-react'

import './container.css'


const Contact = ({ children }) => (
  <React.Fragment>
    <DocumentTitle title="Genomics Geek | Contact" />
    <Container className="Contact-header" textAlign="center">
      <Header size="huge" content="Contact Me" />
      <Header size="large" content="Let's chat..." />
      {children}
    </Container>
  </React.Fragment>
)


export default Contact
