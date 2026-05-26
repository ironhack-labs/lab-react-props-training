import styles from "./BoxColor.module.css";
export function BoxColor(props) {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  const { r, g, b } = props;
  const bgColor = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };
  return (
    <div style={bgColor} className={styles.box}>
      <p>
        rgb({r}, {g}, {b})
      </p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
}
