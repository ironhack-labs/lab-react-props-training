function Greetings(props) {

  return (
    <>
    <div className="row">
      <h3> {props.lang==="en"? "hello": props.lang==="fr"? "Bonjour":props.lang==="es"? "Hola":"Guten Tag"} {props.children}</h3>  
    </div>
  </>
  )
}
export default Greetings
