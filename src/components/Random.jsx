function Random (props) {
    const number = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
    return (
        <div className="random">
            <p>
                Random value between {props.min} and {props.max} &gt; {number} 
            </p>
        </div>
    );
}
export default Random;