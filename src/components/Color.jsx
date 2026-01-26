function Color(props) {
const {r, g, b} = props

const rgb = `rgb(${r}, ${g}, ${b})`;
console.log(rgb)

    return(
<div style={{backgroundColor: rgb, width: '100vh', height: '100px' }}>
<p style={{textAlign: 'center'}}>{rgb}</p>
</div>
    )
}

export default Color