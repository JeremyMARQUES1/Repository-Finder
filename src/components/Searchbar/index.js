import React from 'react';
import PropTypes from 'prop-types';
import './searchbar.scss';

const Searchbar = ({ handleSearchChange, handleSearchSubmit, inputValue }) => (
  <div className="container">
    <form onSubmit={handleSearchSubmit}>
      <input
        className="searchbar"
        type="text"
        placeholder="Search a Github repository..."
        onChange={handleSearchChange}
        value={inputValue}
      />
    </form>
  </div>
);

Searchbar.propTypes = {
  handleSearchSubmit: PropTypes.func.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Searchbar;
