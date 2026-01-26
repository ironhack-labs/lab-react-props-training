export function Rating ({children}) {
    const roundedVal = Math.round(children);
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < roundedVal) {
          stars.push('★');
        } else {
          stars.push('☆');
        }
    }
    return (
        <div className="stars">
          {stars.join('')}
        </div>
    );
}