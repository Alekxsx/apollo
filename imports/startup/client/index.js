import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import App from "../../ui/App";
//ingresado primero


const httplink = new HttpLink({
  uri: Meteor.absoluteUrl("graphql")
});

const cache = new InMemoryCache();
//funcion que recibe un objeto, se descarga en memoria
const client = new ApolloClient({
  link: httplink,
  cache
  // makeExecutableSchema
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

Meteor.startup(()=>{
  render(<ApolloApp/>,document.getElementById('app'))
});       //ingresado primero
