function Random (props) {
    const randomNumber = Math.floor(Math.random() * (props.max- props.min + 1)) + props.min;

    return (
        <div>
            <p className="random">Random Number: {randomNumber} </p>
        </div>
    )
};

export default Random;
