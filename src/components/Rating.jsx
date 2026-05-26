export function Rating(props) {
    const ratings = {
        0 : "☆☆☆☆☆",
        1: "★☆☆☆☆",
        2: "★★☆☆☆",
        3: "★★★☆☆",
        4: "★★★★☆",
        5: "★★★★★"
    }
    const rating = {
      fontSize: "3em",
      padding: 0,
      margin: 0
    };
    const value = Math.round(props.children)
    return <p style={rating}>{ratings[value]}</p>;
}
