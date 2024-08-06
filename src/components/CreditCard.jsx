function CreditCard(props){
    const divStyle = {
        backgroundColor: props.bgColor,
        borderRadius: '20px',
        display: 'flexbox',
        padding: '20px',
        flexDirection: 'column',
        width: '20vw'
    }

    const styleType = {
        textAlign: 'right'
    }

    let dots = '.'
    const hiddenNumber = `${dots.repeat(props.number.length - 4)}${props.number.slice(-4)}`

    return (
        <div style={divStyle}>
            <div style={styleType}>{props.type}</div>
            <div>{hiddenNumber}</div>
            <div>{props.expirationMonth}/{props.expirationYear} {props.bank}</div>
            <div>{props.owner}</div>
        </div>
    )
}

export default CreditCard