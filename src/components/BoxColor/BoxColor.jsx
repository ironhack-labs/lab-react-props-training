import './BoxColor.css'

const BoxColor = (props) => {

    const r = props.r
    const g = props.g
    const b = props.b

    const styleObject = {
        backgroundcolor: rgb(r, g, b)
    }


    return (
        <div className='boxColor' style={styleObject}>

        </div>
    )
}


export default BoxColor