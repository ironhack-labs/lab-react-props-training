export const BoxColour = (props) => {
    const {r, g, b} = props;
    const boxStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: "100%",
        height: "200px",
        border: "1px solid black"
        };
    
        return (
            <div style={boxStyle}></div>
        );
    };