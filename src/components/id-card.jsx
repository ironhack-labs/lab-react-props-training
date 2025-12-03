
function IdCard( {lastName, firstName, gender, height, birth, picture} ) {
    return (
        <div className="d-flex border border-black border-2 mb-2">
            <img className="p-1" src={picture} alt="personal photo" />
            <div>
                <InfoField title="First Name" text={firstName} />
                <InfoField title="Last Name" text={lastName} />
                <InfoField title="Gender" text={gender} />
                <InfoField title="Height" text={`${height/100}m`} />
                <InfoField title="Birth" text={`${birth.toDateString()}`} />
            </div>
        </div>
    );
}

function InfoField ( {title, text}) {
    return (
        <div>
            <strong>{title}:</strong> {text}
        </div>
    );
}

export default IdCard;