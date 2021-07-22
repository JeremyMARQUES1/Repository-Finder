// == Import
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './app.scss';
import githubLogo from 'src/assets/images/logo-github.png';

import { Route, Switch } from 'react-router-dom';

import Header from 'src/components/Header';
import Searchbar from 'src/components/Searchbar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import Faq from 'src/components/Faq';
import MoreResultsButton from 'src/components/MoreResultsButton';

// == Composant
const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [nbOfResulstPerPage, setnbOfResultsPerPage] = useState(9);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchSubmitted, setisSearchSubmitted] = useState(false);

  const handleSearchChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/search/repositories?q=${inputValue}&sort=stars&order=desc&page=1&per_page=${nbOfResulstPerPage}`)
      .then((response) => {
        setSearchResults(response.data);
      });
    setisSearchSubmitted(true);
  };

  const handleMoreResultsClick = () => {
    setnbOfResultsPerPage(nbOfResulstPerPage + nbOfResulstPerPage);
  };

  const showMoreResults = () => {
    axios.get(`https://api.github.com/search/repositories?q=${inputValue}&sort=stars&order=desc&page=1&per_page=${nbOfResulstPerPage}`)
      .then((response) => {
        setSearchResults(response.data);
      });
  };

  useEffect(showMoreResults, [nbOfResulstPerPage]);

  return (
    <div className="app">
      <Header githubLogo={githubLogo} />
      <Switch>
        <Route exact path="/">
          <Searchbar
            handleSearchChange={handleSearchChange}
            handleSearchSubmit={handleSearchSubmit}
            inputValue={inputValue}
          />
          {isSearchSubmitted ? <Message {...searchResults} /> : null}
          {isSearchSubmitted ? <ReposResults {...searchResults} /> : null}
          {isSearchSubmitted ? (
            <MoreResultsButton
              handleMoreResultsClick={handleMoreResultsClick}
            />
          ) : null}
        </Route>
        <Route exact path="/faq">
          <Faq />
        </Route>
      </Switch>

    </div>
  );
};

// == Export
export default App;
