import React from 'react'

function Creditcard(props) {
  return (
    <div style={{backgroundColor : `${props.bgColor}`}}>
        <div style={{textAlign: 'right', marginRight: 20}}>
            <h1>{props.type}</h1>
        </div>
        <h2 style={{textAlign: 'center', width: "90vw", margin: 'auto', fontSize: '1.5rem'}}>{props.number.replace(/.{4}/g, (group, offset) => offset < 12 ? '**** ' : group)}</h2>
        <div style={{display: 'flex', marginLeft: 10, width: "90vw"}}>
            <h2>Expires {props.expirationMonth}/{props.expirationYear}</h2>
            <h2 style={{marginLeft: 20}}>{props.bank}</h2>
        </div>
        <h2>{props.owner}</h2>
    </div>
  )
}

export default Creditcard