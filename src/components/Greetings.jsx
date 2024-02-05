export default function Greetings(props) {
  return <h1>{(props.lang === "de" ? "Hallo " : "Bonjour ") + props.children} </h1>;
}
