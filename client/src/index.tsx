import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import { createGlobalStyle } from 'styled-components'
import { About } from './views/About'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    font-family: 'Raleway', Helvetica, Arial, sans-serif;
    font-size: 16px;
    background-color: #fcfcfc;
  }

  #root {
    flex: 1 1 auto;
  }
`

const client = new ApolloClient({
  uri: 'http://localhost:4000',
})

//Apollo Client
ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <About />
  </ApolloProvider>,
  document.getElementById('root')
)
