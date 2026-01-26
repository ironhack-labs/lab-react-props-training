function Rating(props) {
    const num = Math.round(Number(props.children))
    switch (num) {
        case 0:
            return <div>☆☆☆☆☆</div>
            break;
        case 1:
            return <div>★☆☆☆☆</div>
            break;
        case 2:
            return <div>★★☆☆☆</div>
            break;
        case 3:
            return <div>★★★☆☆</div>
            break;
        case 4:
            return <div>★★★★☆</div>
            break;
        case 5: 
            return <div>★★★★★</div>
            break;
    }
}

export default Rating;