export const Greeting = ({ lang, children }) => {
  let greeting = "";
  if (lang === "de") greeting = "Hallo";
  else if (lang === "fr") greeting = "Bonjour";
  else greeting = "unknown language";

  return (
    <h1>
      {greeting} {children}
    </h1>
  );
};
