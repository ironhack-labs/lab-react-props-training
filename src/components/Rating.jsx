export default function Rating(props){
    const total = Math.floor(Number(props.children)+0.5);
    let stars;
    switch(total){
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
    }

    return(
        <div className="rating">
            {stars}
        </div>
    )

}