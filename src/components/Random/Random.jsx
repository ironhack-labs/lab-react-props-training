import './Random.css'

function Random (props) {
    return <div id="container3">{Math.floor(Math.random() * (props.max - props.min) + props.min)}</div>
}

export default Random