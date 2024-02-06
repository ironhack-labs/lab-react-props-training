function CreditCard (props) {
   
    return (
        <div style={{backgroundColor: `${props.bgColor}`, color: `${props.color}` }}>
            <section>
                <p>{props.type}</p>
            </section>
            <section>
                <p>{props.number}</p>
            </section>
            <section>
                <div>
                    <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
                </div>
            </section>
        </div>
    )
}

export default CreditCard