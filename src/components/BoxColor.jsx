export function BoxColor(props) {
  return (
    <div
      style={{
        height: "50px",
        backgroundColor: `${props.r == 255 ? "red" : "green"}`,

        textAlign: "center",
        width: "400px",
      }}
    >
      rgb({props.r + "," + props.g + "," + props.b})
    </div>
  );
}
