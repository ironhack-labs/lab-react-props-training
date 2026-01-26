export default function Rating({ children }) {
  function getRating() {
    const fullStar = Math.round(children);
    console.log(children);
    const rating = [];
    for (let i = 0; i < 5; i++) {
      if (i < fullStar) {
        rating.push("★");
      } else {
        rating.push("☆");
      }
    }
    return (
      <div className="rating">
        {rating.map((star, index) => {
          return <div key={index}>{`${star}`}</div>;
        })}
      </div>
    );
  }
  return <div>{getRating()}</div>;
}
