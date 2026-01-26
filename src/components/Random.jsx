import './Random.css';

function Random({ min, max }) {
    return (
        <div className="random">
            <span>Random value between {min} and {max} => {Math.floor(Math.random() * (max - min + 1)) + min}</span>
        </div>
    );
}

export default Random;