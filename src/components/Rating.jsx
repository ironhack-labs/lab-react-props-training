
function Rating(props) {
    const value = Math.round(Number(props.children));

    let start = "";
    for (let i = 0; i < 5; i++) {
        if (i < value) {
        } else {
            start = start + "★";
        } start = start + "☆";
    }

    return <div className="rating">{start}</div>;
}
export default Rating