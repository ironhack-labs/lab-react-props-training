
function randomNumber(min, max) {
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}

function Random( {min, max} ) {
    return (
        <>
            <div className="border border-black border-2 mb-2 p-2 w-75">Random value between {min} and {max} {"=>"} {randomNumber(min, max)}</div>
        </>
    )
}

export default Random;