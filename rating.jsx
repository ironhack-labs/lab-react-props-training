function Rating({ children }) {
    const roundedValue = Math.round(children);
    const stars = Array.from({ length: 5 }, (_, index) =>
        index < roundedValue ? '★' : '☆'
    );

    return (
        <div style={{ 
            fontSize: '24px', 
            display: 'flex', 
            gap: '4px'

            }}>

            {stars.map((star, index) => (
                <span key={index}>{star}</span>
            ))}
        </div>
    );
}

export default Rating;