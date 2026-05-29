import React from 'react'

export default function IdCard(props) {
  return (
    <div style={{border: '1px solid black',
                display: 'flex'
    }}>
        <div>
            <img style={{height: 250,
                        padding: 10
            }} src={props.picture} alt=''/>
        </div>
        <div style={{lineHeight: 0.7}}>
            <h2>First name: {props.firstName}</h2>
            <h2>Last name: {props.lastName}</h2>
            <h2>Gender: {props.gender}</h2>
            <h2>Height: {props.height} cm</h2>
            <h2>Birth: {new Date(props.birth).toLocaleDateString('en-GB')}</h2>
        </div>
    </div>
  )
}
