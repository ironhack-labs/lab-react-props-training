export default function Random(props) {
  const min = props.min;
  const max = props.max;

  const result = Math.floor(Math.random()*(max-min+1)+min);
  return (
 <div>
  <p>Random Value between {min} and {max} equal to {result} </p>
 </div>
  )
}
