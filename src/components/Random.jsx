import React from 'react';
import PropTypes from 'prop-types';
/**
 * Random Component
 * Exibe um valor aleatório entre min e max.
 */
const Random = React.memo(function Random({ min, max }) {
  const value = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div className="random" aria-label={`Random value between ${min} and ${max}`}> 
      Random value between {min} and {max} =&gt; <strong>{value}</strong>
    </div>
  );
});

Random.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default Random;
