function IdCard({lastName, firstName, gender, height, birth, picture}) {
    
    return (
        <>
            <div className="m-3 border border-dark" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={picture} className="img-fluid m-3" alt="..."/>
                    </div>
                <div className="col-md-8">
                    <div className="card-body p-3">
                        <p className="card-text mb-0"><strong>FirstName: </strong>{firstName}</p>
                        <p className="card-text mb-0"><strong>LastName: </strong>{lastName}</p>
                        <p className="card-text mb-0"><strong>Gender: </strong>{gender}</p>
                        <p className="card-text mb-0"><strong>Height: </strong>{height} cm</p>
                        <p className="card-text mb-0"><strong>Birth: </strong>{birth.toDateString()}</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

IdCard.defaultProps = {
    lastName: '',
    firstName: '',
    gender: '',
    height: 0,
    birth: new Date(),
    picture: ''
};
export default IdCard;