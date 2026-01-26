function Random(props){
    const number= Math.floor(Math.random() * props.max + 1)

    return(
        <div className="random">
            <p> Random value between {props.min} and {props.max} => {number}</p>
        </div>
    )


}

export default Random