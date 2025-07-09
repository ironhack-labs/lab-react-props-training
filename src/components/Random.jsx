
function Random({min, max}) {
    // let randomNumber = Math.ceil(Math.random() * (props.max - props.min) + props.min);
    // return(
    //     <div className="random">
    //         Random value between {props.min} and {props.max} {"=>"} {randomNumber}
    //     </div>
    // )
    let randomNumber = Math.ceil(Math.random() * (max - min) + min);
    return(
        <div className="random">
            Random value between {min} and {max} {"=>"} {randomNumber}
        </div>
    )
}

export { Random };