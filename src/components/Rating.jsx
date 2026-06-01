function Rating({ children }) {
    const rating = Math.round(children);

    return (
        <div>
            {"*".repeat(rating)}
            {"☆".repeat(5 - rating)}
        </div>
    );
}

export default Rating;