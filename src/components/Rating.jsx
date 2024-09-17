import "./Rating.css"

function Rating(props) {
    let numStar = Math.round(props.children) - 1;
    let listaEstrellas = ['☆','☆','☆','☆','☆'];

    for (let i = 0; i <= numStar; i++){
        listaEstrellas.pop();
        listaEstrellas.unshift('★')
    }
    return (
        <div className="estrellas">
           {/* {listaEstrellas} */}
           {listaEstrellas.map((elemento, index)=>
            <b key={index}>{elemento}</b>)}           
        </div>
    )
}
// ☆★
export default Rating

// {listaEstrellas.map((elemento, index)=>{
//     <p key={index}>{elemento}</p>
// }
// )}