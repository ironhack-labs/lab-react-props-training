import "./Random.css"

function Random ({min, max}) {

    const number = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <div className="number">
            <h3>Random value between {min} and  {max} = {number}</h3>
        </div>
    );
}

export default Random;