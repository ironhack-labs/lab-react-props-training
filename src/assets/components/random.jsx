function Random({ min, max }){
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div className="border m-1 p-1">
      {`Random value between ${min} and ${max} => ${random}`}
    </div>
  );
}

export default Random;