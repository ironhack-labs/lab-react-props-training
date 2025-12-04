
function CreditCard( {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} ) {
    return (
        <div 
        className="d-flex flex-column rounded p-3 w-25 mb-3 ms-2"
        style={{backgroundColor: bgColor,
                color: color
        }}>
            <div className="align-self-end mb-3">
                <div>{type}</div>
            </div>
            <div className="text-center fs-3 mb-3">
                <div>{CodifyCardNumber(number)}</div>
            </div>
            <div style={{ whiteSpace: 'pre' }}>
                <div>Expires {expirationMonth}/{SliceYear(expirationYear)}{' '.repeat(8)}{bank}</div>
                <div>{owner}</div>
            </div>
        </div>
    );
}

function CodifyCardNumber(number) {
    return `●●●● ●●●● ●●●● ${number.slice(12, 16)}`
}

function SliceYear(number) {
    return String(number).slice(2, 4);
}

export default CreditCard;