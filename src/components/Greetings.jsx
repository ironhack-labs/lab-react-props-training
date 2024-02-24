function Greetings(props) {
  // Define the greeting word based on the language
  let greetingWord;
  if (props.lang === "fr") {
    greetingWord = "Salut"; // French greeting
  } else if (props.lang === "de") {
    greetingWord = "Hallo"; // Corrected German greeting
  } else if (props.lang === "en") {
    greetingWord = "Hello"; // English greeting
  } else if (props.lang === "es") {
    greetingWord = "Hola"; // Spanish greeting
  }

  
  console.log(greetingWord);

  
  return (
    <h2>{greetingWord} {props.children}</h2>
  );
}


export default Greetings