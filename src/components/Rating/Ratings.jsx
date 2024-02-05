export default function Rating({ children }) {
  const renderStars = () => {
    let result = [];
    for (let i = 0; i < 5; i++) {
      if (i >= Math.round(children)) {
        result.push("☆");
      } else {
        result.push("★");
      }
    }
    return result.join("");
  };
  return <div className="Rating">{renderStars()}</div>;
}

