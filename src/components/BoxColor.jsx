import React from "react";

const BoxColor = ({ r, g, b }) => {
    const backgroundColor = `rgb(${r},${g},${b})`;

    const rgbToHex = (r,g,b) => {
        const colorToHex = (color) => {
            const hex = color.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }
        const hexR = colorToHex(r);
        const hexG = colorToHex(g);
        const hexB = colorToHex(b);

        return `#${hexR}${hexG}${hexB}`;

    }

    const backgroundColorHex = rgbToHex(r,g,b);
    return (
      <div className="color-container"
        style={{
          backgroundColor,
          height: "200px",
        }}
      >
        <div className="text-color-container">
            <p>{backgroundColor}</p>
            <p>{backgroundColorHex}</p>
        </div>
      </div>
    );
};

export default BoxColor;
