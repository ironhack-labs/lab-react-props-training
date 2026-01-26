

function Greetings(props) {
  let saludo;
  if (props.lang === 'de'){
    saludo = `Hallo ${props.children}`
  }
  else if (props.lang === 'en'){
    saludo = `Hi ${props.children}`
  }
  else if (props.lang === 'es'){
    saludo = `Qué paso ${props.children}?`
  }
  else if (props.lang === 'fr'){
    saludo = `Bonjour ${props.children}`
  }
  
  return (
    <div>{saludo}</div>
  )
}

export default Greetings