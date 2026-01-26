import React from 'react';

function IdCard(props) {
    const { lastName, firstName, gender, height, birth, picture } = props;
    return (
        <>
            <div className="id-card">
                <img src={picture} />
                <div className="id-card2">
                    <p>First name:  {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Gender: {gender}    </p>
                    <p>Height: {height}cm  </p>
                    <p>Birth:  {birth.toDateString()}</p>
                </div>
            </div>
        </>
    )
}

export default IdCard;