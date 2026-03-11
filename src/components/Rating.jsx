function Rating ({children}) {
    const ratingValue = parseFloat(children);
    const percentage = (ratingValue / 5) * 100;

    return (
        <div className="rating" style={{ '--percent': `${percentage}%` }}>
            
        </div>
    )
}

export default Rating;