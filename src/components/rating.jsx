function Rating (props) {

    let source = ""
    let rating = Math.round(props.children)
    switch (rating) {
        case 0:
            source = "src/assets/images/rating/0.png"
            break;
        case 1:
            source = "src/assets/images/rating/1.png"
            break;
        case 2:
            source = "src/assets/images/rating/2.png"
            break;
        case 3:
            source = "src/assets/images/rating/3.png"
            break;
        case 4:
            source = "src/assets/images/rating/4.png"
            break;
        case 5:
            source = "src/assets/images/rating/5.png"
            break;
    }   

    return <div className="rating">
        <img src={source} />
    </div>
}

export default Rating