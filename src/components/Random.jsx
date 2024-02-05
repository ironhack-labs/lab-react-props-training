function Random({ min, max }) {
  const random = Math.floor(Math.random() * (max - min)) + min;
  const text = `Random value between ${min} and ${max} => ${random}`;
  return (
    <div className="user-card">
      <p>{text}</p>
    </div>
  );
}

export default Random;
