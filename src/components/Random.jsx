function Random({min, max}) {
  const randomNumber = Math.floor(min + Math.random() * max);

  return (
    <div className="random-number">
      <h4>{randomNumber}</h4>
    </div>
  );
}

export default Random;