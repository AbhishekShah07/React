import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./style.scss";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter } from "react-router-dom";
import { AUTHORIZATION_TOKEN, BASE_URL } from "./contants";

const baseLink = createHttpLink({
  uri: BASE_URL,
});

const authorization = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTHORIZATION_TOKEN);
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  };
});

const client = new ApolloClient({
  link: authorization.concat(baseLink),
  cache: new InMemoryCache(),
});

render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
