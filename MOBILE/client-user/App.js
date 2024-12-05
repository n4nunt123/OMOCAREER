import * as React from 'react';
import { ApolloProvider } from '@apollo/client'
import client from './config/index'
import MainStack from "./navigator/MainStack";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <MainStack />
    </ApolloProvider>
  );
}