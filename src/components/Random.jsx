
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function Random ({ min, max }) {
    return (
        <div className="d-flex p-2 border border-dark my-2 mx-2">
            Random value between { min } and { max } => {getRandomArbitrary(min, max).toFixed(0)}
        </div>
    );
}

export default Random;