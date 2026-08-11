function DriverCard(props){

    const ratingCount = Math.round(parseFloat(props.rating));
    return(
         <div style={{ backgroundColor: '#455EB5', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px' , width: '620px', padding: '15px', marginBottom: '10px', marginLeft: '10px'}}>
            <img style={{ borderRadius: '100%', width: '100px', height: '100px', objectFit: 'contain' }} src={props.img} />
            <div style={{ padding: '20px', color: 'white' }}>
                <h2 className="no-margin">{props.name}</h2>
                <p className="no-margin" style={{ fontSize: '24px' }}>{'★'.repeat(ratingCount)}{'☆'.repeat(5 - ratingCount)}</p>
                <p className="no-margin"> {props.car.model} - {props.car.licensePlate} </p>
            </div>
        </div>
    );
}

export default DriverCard;