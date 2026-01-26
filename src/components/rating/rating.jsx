function Rating({ children }) {
    /**
     * const fullStar ='\u2605';
     * const emptyStar ='\u2606';
     *  OR 
     * ★ 
     * ☆
     */
    let stars = '';

    const rounded = Math.round(children); // Redondeamos el valor recibido

    switch (rounded) {
        case 1:
            stars = "★☆☆☆☆";
            break;
        case 2:
            stars = "★★☆☆☆";
            break;
        case 3:
            stars = "★★★☆☆";
            break;
        case 4:
            stars = "★★★★☆";
            break;
        case 5:
            stars = "★★★★★";
            break;
        default:
            stars = '';
            break;
    }

    return (
        <div className="fs-3">
            {stars}
        </div>
    );
}

export default Rating;