function CreditCard ({

    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color

}) {

    const lastDigits = number.slice(-4)
    
    const month = expirationMonth.toString().padStart(2, "0")

    const year = expirationYear.toString().slice(-2)

    return (
        <div
          className="credit-card"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "left",
            backgroundColor: bgColor,
            color: color,
            width: "300px",
            height: "170px",
            borderRadius: "15px",
            padding: "20px",
            margin: "15px 5px",
          }}
          >
            <div style={{
                textAlign: "right",
                fontSize: "22px",
                fontWeight: "bold"
            }}>
                {type}
            </div>

            <p style={{
                fontSize: "24px",
                textAlign: "center",
                margin: 0
            }}>
                ****  ***** **** {lastDigits}
            </p>

            <div>
                <p style={{margin: 0}}>
                    Expires {month} / {year} {bank}
                </p>

                <p style={{margin:"5px 0 0"}}>
                    {owner}
                </p>
            </div>
          </div>
    
    )

}

export default CreditCard