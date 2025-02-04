import React from 'react'

const BoxColor = ({ r, g, b }) => {
    if (
        typeof r !== "number" ||
        typeof g !== "number" ||
        typeof b !== "number" ||
        r < 0 ||
        r > 255 ||
        g < 0 ||
        g > 255 ||
        b < 0 ||
        b > 255
    ) {
        return <p>Invalid props: Please provide valid RGB values (0-255).</p>;
    }

    const color = `rgb(${r}, ${g}, ${b})`;

    return (
        <div
            style={{
                width: "50rem",
                height: "100px",
                backgroundColor: color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "14px",
                border: "1px solid black",

            }}
        >
            <p>
                rgb({r}, {g}, {b})
            </p>
        </div>
    )
}

export default BoxColor
