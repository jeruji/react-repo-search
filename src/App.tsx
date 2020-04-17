import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import RepoSearch from "./RepoSearch";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ca6201ac3020249bc5ad4899f0412d946d5687b8`,
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Header />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <RepoSearch client={client} />
      </div>
    </ApolloProvider>
  );
}

export default App;
