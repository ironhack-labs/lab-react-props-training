export default function Greetings(props) {
  const { lang, children } = props;
  return (
    <div className="Box">
      {(lang === "de" ? "Hallo " : "Bonjour ") + children}
    </div>
  );
}
