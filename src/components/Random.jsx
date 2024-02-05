function Random(props) {
  

  let min = props.min;
  let max = props.max;
  const random = Math.floor(Math.random() * (max - min)) + min;

  let resultText = `Random value between ${min} and ${max} => ${random}`


  return (
    <div className="solidBorder">
      <p> {resultText}</p>
    </div>
  );
}
 

export default Random;
