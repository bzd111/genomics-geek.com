import React from 'react'
import { Grid, Icon, Button } from 'semantic-ui-react'

import './index.css'

// TODO: Get version and commit from github API
// https://api.github.com/repos/genomics-geek/genomics-geek.com/branches/master get(commit.sha)
// https://api.github.com/repos/genomics-geek/genomics-geek.com/tags get(data[0])
const Footer = () => {

  const gitURL = "https://github.com/genomics-geek/genomics-geek.com"
  const version = process.env.REACT_APP_VERSION

  const versionLink = gitURL + '/releases/tag/' + version
  const commit = '/tree/' + process.env.REACT_APP_COMMIT
  const commitLink = gitURL + commit

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


export default Footer
