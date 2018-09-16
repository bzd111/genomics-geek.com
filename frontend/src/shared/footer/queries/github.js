import gql from 'graphql-tag'


export const COMMIT = gql`
query commit($path: String!) {
  commit @rest(
      type: "Get",
      path: $path,
      endpoint: "github"
  ) {
    commit
  }
}
`


export const TAGS = gql`
query tags($path: String!) {
  tags @rest(
      type: "Get",
      path: $path,
      endpoint: "github"
  ) {
    name
  }
}
`
