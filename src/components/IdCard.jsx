import React from 'react';

function IdCard(props) {
    <>
        <p>Last Name: {props.lastName}</p>
        <p>First Name: {props.firstName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth}</p>
        <img src={props.picture} alt="Portrait of {props.lastName} {props.firstName}" />
    </>
}


export default IdCard;