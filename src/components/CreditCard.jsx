function CreditCard(props){
    /* let arr = Array.from({props.number}) */
    return (
        <div style={{background: `${props.bgColor}`,
        color: `${props.color}`,
        display: "flex",
        width: "400px",
        height: "180px",
        flexWrap: "wrap",
        flexDirection: "column"   
        }}>     
            <p style={{justifyContent: "flex-end", 
            width: "100%",
            display: "flex"
            }}>{props.type}</p>
            <p style={{fontSize: "25px",
                alignSelf: "center",
                marginTop: "15px",
                marginBottom: "15px"
            }}>
            {props.number}
            </p>
            <div style={{display: "flex", flexDirection: "row"}}>
                <p style={{marginLeft: "20px",marginTop: "10px", marginBottom: "0", display: "flex", flexDirection: "row"}}>Expires {props.expirationMonth}/{props.expirationYear}</p>
                <p style={{marginBottom: "0",marginTop: "10px", marginLeft: "50px"}}>{props.bank}</p>
            </div> 
            <p style={{marginLeft: "20px", marginBottom: "0",marginTop: "0",}}>{props.owner}</p>       
        </div>
    )
}

export default CreditCard;