import React from 'react';


function IdCard(props) {
    return (
        <div class="idCard" >
            <img src={props.picture} />
            <p><strong>First Name:</strong> {props.firstName}</p>
            <p><strong>Last Name:</strong> {props.lastName}</p>
            <p><strong>Gender:</strong> {props.gender}</p>
            <p><strong>Height: </strong>{props.height}cm</p>
            <p><strong>Birth:</strong> {props.birth.toDateString()}</p>

        </div>
    );





}
export default IdCard;
