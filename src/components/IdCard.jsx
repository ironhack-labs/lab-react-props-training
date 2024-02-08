import React from 'react'

const IdCard = ({lastName, firstName,gender,height,birth,picture}) => {
  return (
    <div className='greet'>
        <ul>
        <li>First name: {lastName}</li>
        <li>Last name: {firstName}</li>
        <li>Gender: {gender}</li>
        <li>Height: {height}</li>
        <li>Birth: {birth.toLocaleDateString()}</li>
        <li><img src={picture} alt="myPicture" /></li>
        </ul>
    </div>
  )
}

export default IdCard