import React from 'react'

import './index.css'

import DocumentTitle from 'react-document-title'
import { withRouter } from 'react-router-dom'
import { Button, Container, Header } from 'semantic-ui-react'


export const Home = ({ history }) => (
  <div className="Home">
    <DocumentTitle title="Genomics Geek | Home" />
    <Container className="Home-header animated fadeInDown" textAlign="center">
      <Header size="huge" content="Genomics Geek" />
      <Header size="large" content="Genetics. Bioinformatics. Software." />
      <Button
        circular
        inverted
        color="brown"
        icon="dna"
        size="massive"
        content="Learn More"
        onClick={() => history.push('/app/about/')}
      />
    </Container>
  </div>
)


export default withRouter(Home)
