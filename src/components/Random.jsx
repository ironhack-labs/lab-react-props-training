

const Random = ({ min, max }) => {
    const randomNumber = Math.ceil((Math.random() * max - min ) + min);
  return (
    <div className="card">
      <p>
        Random value between {min} and {max} {"=>"}{" "}
        {randomNumber}{" "}
      </p>
    </div>
  );
};

export default Random;
