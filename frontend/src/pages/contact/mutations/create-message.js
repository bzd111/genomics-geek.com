import gql from 'graphql-tag'


export const CREATE_MESSAGE = gql`
mutation createMessage($name: String!, $email: String!, $subject: String!, $text: String!) {
  createMessage(name: $name, email: $email, subject: $subject, text: $text) {
    message {
      name
      email
      subject
      text
    }
  }
}
`
