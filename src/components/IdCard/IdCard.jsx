import React from 'react';
import PropTypes from 'prop-types';
/**
 * IdCard Component
 * Exibe informações de uma pessoa de forma acessível e estilizada.
 */
const IdCard = React.memo(function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <section className="id-card" aria-label={`ID Card for ${firstName} ${lastName}`}> 
      <img src={picture} alt={`Foto de ${firstName} ${lastName}`} />
      <div>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height}m</p>
        <p><strong>Birth:</strong> {birth.toLocaleDateString()}</p>
      </div>
    </section>
  );
});

IdCard.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  birth: PropTypes.instanceOf(Date).isRequired,
  picture: PropTypes.string.isRequired,
};

export default IdCard;
