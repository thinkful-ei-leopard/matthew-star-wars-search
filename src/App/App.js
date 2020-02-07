import React from "react";
import { StyleSheet, css } from "aphrodite";

import Header from "../Header/Header";
import ErrorPage from "../ErrorPage/ErrorPage";
import SearchBar from "../SearchBar/SearchBar";
import ResultsList from "../ResultsList/ResultsList";
import ApiContext from "../ApiContext";

export default class App extends React.Component {
  state = {
    results: [],
    error: null
  };

  setResults = results => {
    this.setState({ results });
  };

  setError = error => {
    this.setState({ error });
  };

  render() {
    const value = {
      results: this.state.results,
      setResults: this.setResults,
      setError: this.setError
    };
    return (
      <ApiContext.Provider value={value}>
        <div className={css(styles.app)}>
          <Header />
          <main>
            <ErrorPage>
              <SearchBar />
              {this.state.error ? (
                <div className={css(styles.errorPage)}>
                  <h2 className={css(styles.errorHeader)}>
                    Something seems to have gone wrong
                  </h2>
                  <p className={css(styles.errorText)}>
                    Try refreshing the page
                  </p>
                </div>
              ) : (
                ""
              )}
              <ResultsList />
            </ErrorPage>
          </main>
        </div>
      </ApiContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    textAlign: "center",
    backgroundColor: '#0B1F3A'
  },

  errorPage: {
    backgroundColor: "tomato",
    width: "75%",
    margin: "auto auto",
    padding: "20px",
    borderRadius: "20px"
  },

  errorHeader: {
    color: "red",
    textDecoration: "underline"
  },

  errorText: {
    color: "#bdbdbd",
    fontSize: "x-large"
  }
});
