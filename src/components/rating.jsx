import "./rating.css";

function Rating({ children }) {
  const star = Math.round(children);
  let starPreview = "";

  for (let i = 0; i < 5; i++) {
    starPreview += i < star ? "★" : "☆";
  }

  return (
    <>
      <div>{starPreview}</div>
    </>
  );
}

export default Rating;