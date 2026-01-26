import React from "react";

const BoxColor = (props) => {
  const { r, g, b } = props;

  // Create an object for inline styles based on r, g, b values
  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: "200px", // Adjust the width and height based on your requirement
    height: "100px",
  };

  return (
    <div style={boxStyle}>
      {/* No need to have any content inside the div */}
    </div>
  );
};

export default BoxColor;
