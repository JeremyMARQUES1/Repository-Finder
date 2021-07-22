import React from 'react';
import PropTypes from 'prop-types';
import './moreresultsbutton.scss';

const MoreResultsButton = ({ handleMoreResultsClick }) => {
  if (!handleMoreResultsClick) {
    return null;
  }
  return (
    <button
      className="more-results-button"
      type="button"
      onClick={handleMoreResultsClick}
    >Plus de résultats
    </button>
  );
};

MoreResultsButton.propTypes = {
  handleMoreResultsClick: PropTypes.func.isRequired,
};

export default MoreResultsButton;
