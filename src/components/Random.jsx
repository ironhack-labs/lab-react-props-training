export default function Random({min, max}) {
    const randomNumber = Math.floor((Math.random() * (max - min + 1) + min));
    return (
        <h3>Random value between {min} and {max} => {randomNumber}</h3>
    );
}