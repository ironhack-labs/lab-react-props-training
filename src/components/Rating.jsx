function Rating (props) {
    return(
        <div style={{fontSize:"50px"}}>{
            "★".repeat(Math.round(props.children)) + "☆".repeat(5-Math.round(props.children))
        }</div>
    );
}

export default Rating