import './Random.css'

function Random ({min, max}) {
   const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="random-box">
      <p>
        Número aleatorio entre {min} y {max}: <strong>{randomNumber}</strong>
      </p>
    </div>
  );
}

export default Random;