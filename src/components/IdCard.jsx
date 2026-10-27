function IdCard(props){

return(

<div className="id-card">

<p> firstName:{props.firstName}</p>
<p> lastName:{props.lastName}</p>
<p> gender:{props.gender}</p>
<p> height:{props.height}</p>
<p> birth:{props.birth.toLocaleDateString()}</p>
<img src={props.picture}></img>

</div>



    )
}

export default IdCard