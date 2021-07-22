import React from 'react';
import PropTypes from 'prop-types';
import './reposresults.scss';

const ReposResults = ({ items }) => {
  if (!items) {
    return null;
  }

  return (
    <div
      className="card-container"
    >
      {
    items.map(
      (item) => (
        <div
          className="card"
          key={item.id}
        >
          <img
            className="card-image"
            src={item.owner.avatar_url}
            alt={item.description}
          />
          <p className="card-title">{item.name}</p>
          <p className="card-subtitle">{item.owner.login}</p>
          <p className="card-description">{item.description}</p>
        </div>
      ),
    )
      }
    </div>
  );
};

ReposResults.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReposResults;
