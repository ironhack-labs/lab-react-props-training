import React from 'react';

function Random({ min, max }) {

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="d-flex align-items-center border border-dark p-2 mb-3b-3 gap-3 container w-50 mx-auto mt-3">
      <p>Random value between {min} and {max}: {randomNumber}</p>
    </div>
  );
}

export default Random;