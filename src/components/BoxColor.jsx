import React from 'react';
import PropTypes from 'prop-types';
/**
 * BoxColor Component
 * Exibe uma caixa colorida com cor RGB e HEX.
 */
const BoxColor = React.memo(function BoxColor({ r, g, b }) {
  const rgb = `rgb(${r},${g},${b})`;
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
  return (
    <div className="box-color" style={{ backgroundColor: rgb, color: '#222', textAlign: 'center' }} aria-label={`Box color ${rgb}`}> 
      <div>{rgb}</div>
      <div>{hex}</div>
    </div>
  );
});

BoxColor.propTypes = {
  r: PropTypes.number.isRequired,
  g: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default BoxColor;
