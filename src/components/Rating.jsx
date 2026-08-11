function Rating({children}){

    const ratingCount = Math.round(parseFloat(children));
    console.log(ratingCount, children)
    return(
        <div style={{marginBottom: '5px', marginLeft: '10px'  }}>
            <p className="no-margin" style={{ fontSize: '28px' }}>{'★'.repeat(ratingCount)}{'☆'.repeat(5 - ratingCount)}</p>
        </div>
    );
}

export default Rating;