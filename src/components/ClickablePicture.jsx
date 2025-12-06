import { useState } from "react";

function ClickablePicture({ img1, img2 }) {
  const [isFirst, setIsFirst] = useState(true);

  function handleClick() {
    setIsFirst(!isFirst);
  }

  return (
    <img
      src={isFirst ? img1 : img2}
      alt="clickable"
      onClick={handleClick}
      style={{ cursor: "pointer", width: "200px" }}
    />
  );
}

export default ClickablePicture;
