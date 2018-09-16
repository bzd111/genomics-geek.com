import React from 'react'

import { Query } from 'react-apollo'
import { get } from 'lodash'

import Alert from 'shared/alert'
import Footer from './components/footer'

import { COMMIT, TAGS } from './queries/github'


const FooterContainer = () => (
  <Query query={TAGS} variables={{ path: "repos/genomics-geek/genomics-geek.com/tags" }}>
    {({ loading, error, data }) => {
      if (loading) return null
      if (error) return <Alert type="error" message={error.message} />
      const version = get(data, 'tags[0].name', 'v0.1.0')
      return (
        <Query query={COMMIT} variables={{ path: "repos/genomics-geek/genomics-geek.com/branches/master" }}>
          {({ loading, error, data }) => {
            if (loading) return null
            if (error) return <Alert type="error" message={error.message} />
            const commit = get(data, 'commit.commit.sha2', null)
            return <Footer version={version} commit={commit} />
          }}
        </Query>
      )
    }}
  </Query>
)


export default FooterContainer
