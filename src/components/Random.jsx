
function Random(props) {
    const {min, max} = props;
    let randomValue = Math.floor(Math.random() * (max-min)) + min;
  return (
    <div class="text-border">
        <p>Random value between {min} and {max} {'=>'} {randomValue}</p>
    </div>
  )
}

export default Random


