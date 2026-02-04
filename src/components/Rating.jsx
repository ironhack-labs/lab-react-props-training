import React from 'react';
import PropTypes from 'prop-types';
/**
 * Rating Component
 * Exibe estrelas de avaliação.
 */
const Rating = React.memo(function Rating({ children }) {
  const value = Math.round(Number(children));
  const stars = '★'.repeat(value) + '☆'.repeat(5 - value);
  return (
    <div className="rating" aria-label={`Rating: ${value} out of 5`}>{stars}</div>
  );
});

Rating.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
};

export default Rating;
