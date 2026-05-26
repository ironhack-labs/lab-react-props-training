export function Random(props) {
    let { min, max } = props 
    min = Math.ceil(min)
    max = Math.floor(max)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return (
      <p>
        Random value between {props.min} and {props.max} =={">"} {randomNumber}
      </p>
    );
}
