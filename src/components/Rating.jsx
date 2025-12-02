function Rating({ children }) {
    const rounded = Math.round(children); // Round to nearest integer
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rounded ? "★" : "☆");
    }
  
    return (
      <div style={{ fontSize: "2rem", margin: "5px 0" }}>
        {stars.join("")}
      </div>
    );
  }
  
  export default Rating;
  