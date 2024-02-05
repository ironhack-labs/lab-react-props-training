const Random = (props) =>{
	const {min, max} = props
	const random =  Math.floor(Math.random() * (max - min) + min);
	return <p className="Random">Random value between {min} and {max}: {random}</p>
}
  
  export default Random;
  