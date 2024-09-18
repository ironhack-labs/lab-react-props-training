import Color from "./Color"

function BoxColor() {

    const randomColor = () => {
        return {
    r:  Math.floor(Math.random() * (255 - 0 +1)),
    g: Math.floor(Math.random() * (255 - 0 +1)),
    b: Math.floor(Math.random() * (255 - 0 +1)),
        }
    }

    const color1= randomColor()
    const color2 = randomColor()
    return(
    <div className="color">
      <Color r={color1.r} g={color1.g} b={color1.b} />
      <Color r={color2.r} g={color2.g} b={color2.b} />
    </div>
    )
}

export default BoxColor