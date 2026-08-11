

function CreditCard(props) {

const {
    type, number , expirationMonth, expirationYear, bank, owner, bgColor, color 
} = props;

const maskedNumber = `**** **** **** ${number.slice(-4)}`;

const formattedMonth = String(expirationMonth).padStart(2,"0");
const formattedYear = String(expirationYear).toString().slice(-2);

const cardType = type ==="visa" ? "visa" : "MasterCard";

  return (
    <div className="credit-card" style={{
        backgroundColor : bgColor,
        color: color,
        width: "320px",
        height:"180px",
        borderRadius:"10px",
        padding:"20px",
        boxSizing:"border-box",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        margin:"10px",
        fontFamily:"sans-serif"
    }}>
        <div style={{ alignSelf: "flex-end", fontWeight: "bold", fontSize: "1.2rem", fontStyle: "italic" }}>
            {cardType}
        </div>

        <div style={{ fontSize: "1.5rem", textAlign:"center", letterSpacing:"2px",margin:"15px 0" }}>
            {maskedNumber}
        </div>

        <div style={{fontSize:"0.85rem", lineHeight:"1.4"}}>
            <div>
                <span>Expires {formattedMonth}/ {formattedYear}</span>
                <span style={{marginLeft:"15px"}}>{bank}</span>
            </div>
            <div style={{fontWeight:"500"}}>{owner}</div>
        </div>

    </div>
  );
}

export default CreditCard