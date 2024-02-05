export default function Greetings(props) {
  switch (props.lang) {
    case "de":
      return <p>Hallo {props.children}</p>;
      break;
    case "fr":
      return <p>Bonjour {props.children}</p>;
  }
}
