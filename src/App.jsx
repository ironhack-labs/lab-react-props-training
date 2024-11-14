import Greetings from "./components/greetings/greetings";
import IdCard from "./components/id-card/id-card";

function App() {
  return (
    <div className="container py-5">
      <IdCard
        className="mb-2"
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <Greetings className="mb-1">Carlos</Greetings>
      <Greetings lang="fr">Juli</Greetings>
    </div>
  );
}

export default App;