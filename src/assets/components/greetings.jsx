function Greetings({ lang, children }) {
  let greeting;
  switch (lang) {
    case "de":
      greeting = "Guten Morgen";
    break;
    case "en":
      greeting = "Good morning";
    break;
    case "es":
      greeting = "Buenos días";
    break;
    case "fr":
      greeting = "Bonjour";
    break;
  }
  return (
    <>  
      <div className="border m-1 p-1">
        {`${greeting} ${children}`}
      </div>
    </>
  );
}

export default Greetings;