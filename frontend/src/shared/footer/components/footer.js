import React from 'react'

import PropTypes from 'prop-types'
import { Grid, Icon, Button } from 'semantic-ui-react'

import './footer.css'


const Footer = ({ version, commit }) => {

  const gitURL = "https://github.com/genomics-geek/genomics-geek.com"
  const versionLink = gitURL + '/releases/tag/' + version
  const commitLink = gitURL + '/tree/' + commit

  return (
    <Grid className="site-footer">
      <Grid.Column width={1} />
      <Grid.Column width={6}>
        <p>©2018 Genomics Geek</p>
      </Grid.Column>
      <Grid.Column width={8}>
        <a
          title="Github Repo"
          href={gitURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="git-icon" name="github" size="big"/>
        </a>
        <a
          title='Deployed Github Commit'
          href={commitLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="git-icon" name="fork" size="big"/>
        </a>
        <Button.Group
          floated="right"
          as="a"
          href={versionLink}
          target="_blank"
          size="mini"
        >
          <Button color="grey" className="site-version">Version</Button>
          <Button inverted color="orange" className="site-version" content={version} />
        </Button.Group>
      </Grid.Column>
      <Grid.Column width={1} />
    </Grid>
  )
}


Footer.propTypes = {
  version: PropTypes.string,
  commit: PropTypes.string,
}


Footer.defaultProps = {
  version: 'N/A',
  commit: 'N/A',
}


export default Footer
