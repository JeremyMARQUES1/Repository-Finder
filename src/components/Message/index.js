/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './message.scss';

const Message = ({ total_count }) => (
  <div className="container">
    <p>La recherche a donné {total_count} résultats</p>
  </div>
);

Message.propTypes = {
  total_count: PropTypes.number.isRequired,
};

export default Message;
