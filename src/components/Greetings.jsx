export const Greetings = (props) => {
  const greetings = {
    de: "halo",
    en: "Hello",
    es: "hallo",
    fr: "privat",
  };

  return (
    <div className="greeting">
      {`${greetings[props.lang]} ${props.children}`}
    </div>
  );
};
