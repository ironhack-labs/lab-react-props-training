function BoxColor(props) {
  return (
    <div
      id="boxColor"
      style={{
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
      }}
    ></div>
  );
}

export default BoxColor;
