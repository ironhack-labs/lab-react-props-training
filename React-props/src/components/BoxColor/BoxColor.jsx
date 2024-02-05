import './BoxColor.css'


const boxColored = (props) => {

    const r = props.r
    const g = props.g
    const b = props.b

    const divStyle = { backgroundColor: 'red' }
    return (
        <div style={divStyle}>
            <p> {r} {g} {b}  </p>


        </div>

    )


}

export default boxColored