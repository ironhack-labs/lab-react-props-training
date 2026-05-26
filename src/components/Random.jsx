export function Random(props) {
    const min = props.min;
    const max = props.max;
    const randomNumber = Math.floor(Math.random()*(max-min+1)+min);
    return (
        <h2 className="container">
            Random Value between {min} and {max} {'=>'} {randomNumber} 
        </h2>
    )
}