

function Rating ({ children }) {

    const num = Math.round(children);

    const full = '★';
    const empt = '☆';
    
    const start = full.repeat(num) + empt.repeat(5 - num);

    return (
        <div>{ start }</div>
    );
}

export default Rating;