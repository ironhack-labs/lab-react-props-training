import "./Greetings.css";

export const Greetings = ({ children, lang }) => {
  const greeting = (lang) => {
    if (lang === "de") {
      return "Hallo";
    } else if (lang === "fr") {
      return "Bonjour";
    } else if (lang === "en") {
      return "Howdy";
    } else if (lang === "es") {
      return "Joder";
    }
  };

  return (
    <div className="greetings-box">
      {greeting(lang)} {children}
    </div>
  );
};
