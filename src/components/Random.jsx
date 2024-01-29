
export const Random = ({ min, max }) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const divStyle = {
        border: '1px solid black',
        margin: '20px',
        padding: '10px',
    };

    return (
        <div style={divStyle}>Random Value between {min} and {max} = {randomNumber}</div>
    )
}
