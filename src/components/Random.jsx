function Random (props) {
let randomNum = Math.floor(Math.Random() * (100 - 1) +1);
        return (
            <div>
                <p>Your random number is: {props.randomNum}</p>
            </div>
        )
}
export default Random;