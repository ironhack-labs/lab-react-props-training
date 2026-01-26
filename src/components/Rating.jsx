export const Rating = (props) => {
    const rounded = Math.round(props.children);
    const totalStars = 5;
    const stars = "★".repeat(rounded) + "☆".repeat(totalStars - rounded);

    return (
    <div className="rating">
        {stars}
    </div>
    );
  };