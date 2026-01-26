

const BoxColor = ({r,g,b}) => {

    const backgroundColor = `rgb(${r}, ${g}, ${b})`;
  return (
    <div> 
        <div style={{backgroundColor: backgroundColor}}>
            Yeah
        </div>
    </div>
  )
}

export default BoxColor
