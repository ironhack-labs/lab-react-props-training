
function BoxColor() {
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    const fullRGB = `rgb(${r},${g},${b})`
    console.log(fullRGB)
    const w = 150
    
  return (
    <div style={{width:'430px',height:'150px',backgroundColor: fullRGB }}>
        
    </div>
  )
}


export default BoxColor