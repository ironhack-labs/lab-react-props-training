import './../BoxColor/BoxColor.css'
const BoxColor = (props) => {

    const r = props.r
    const g = props.g
    const b = props.b

    const styleObject = {
        backgroundColor: `rgb(${r},${g},${b})`,
        color: 'white'
    }
    return (
        <div className='rectangle' style={styleObject}>
            <p className='prectangle'>rgb {'('} {r},{g},{b}{')'}</p>
        </div>

    )
}
export default BoxColor