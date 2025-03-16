function Random({ min, max }) {
  let random = Math.floor(Math.random() * (max - min) + min);

  return (
    <div className="card">
      <p>
        Random value between {min} and {max} &#61;&#62; {random}
      </p>
    </div>
  );
}

export default Random;
