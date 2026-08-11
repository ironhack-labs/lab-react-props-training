function IdCard( { lastName, firstName, gender, height, birth, picture } ) {
  
 
  // component invocation
  
  return (
    <div id="card">
        <img id="card-img" src={picture} alt="picture" />

        <div id="info-wrapper">
            <p>LastName={lastName}</p>
            <p>FirstName={firstName}</p>
            <p>Gender={gender}</p>
            <p>Height={height}</p>
            <p>Birth={birth.toDateString()}</p>
            
        </div>
       
      
    </div>
  );
}

export default IdCard;

import React from 'react'

