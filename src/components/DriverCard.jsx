function DriverCard({ name, rating, img, car }) {
    const roundedRating = Math.round(rating);

    return (
        <div>
            <img src={img} alt={name} width="100" />

            <h3>{name}</h3>

            <p>
                {"*".repeat(roundedRating)}
                {"☆".repeat(5 - roundedRating)}
            </p>

            <p>{car.model}</p>
            <p>{car.licensePlate}</p>
        </div>
    );
}

export default DriverCard;