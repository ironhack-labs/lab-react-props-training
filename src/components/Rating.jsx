function Rating({ children }) {
  let filledStarCount = Math.round(children);
  const stars = Array.from({ length: 5 }, (_, index) =>
    //loops till the max value 5

    index < filledStarCount ? (
      <i key={index} className="fa fa-star" style={{ fontSize: 24 }}></i>
    ) : (
      <i key={index} className="fa fa-star-o" style={{ fontSize: 24 }}></i>
    )
  );

  return (
    <>
      <h1>{stars}</h1>
    </>
  );
}

export default Rating;
