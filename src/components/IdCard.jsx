
function IdCard ({ lastName, firstName, gender, height, birth, picture}) {

    return (
        <div className="d-flex p-2 border border-dark my-2 mx-2">
            <div className="d-flex flex-row">
                <img src={ picture } className="float-start" alt="..."></img>
                <div className="ms-2">
                    <p className="mb-0"><strong>First name:</strong> { firstName }</p>
                    <p className="mb-0"><strong>Last name:</strong> { lastName }</p>
                    <p className="mb-0"><strong>Gender:</strong> { gender }</p>
                    <p className="mb-0"><strong>Height:</strong> { (height / 100).toFixed(2) }m</p>
                    <p className="mb-0"><strong>Birth:</strong> { birth.toLocaleDateString() }</p>    
                </div>
            </div>
        </div>
    );
}

export default IdCard;