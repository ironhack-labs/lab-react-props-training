import React from 'react'

function Random({min, max}) {

    function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let result = getRandomInt(min, max)



  return (
    <div className='box'>
        <p>Random value between {min} and {max} => {result} </p>

    </div>
  )
}

export default Random