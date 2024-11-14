import CreditCard from "./components/credit-card/credit-card";
import BoxColor from "./components/box-color/box-color";
import Random from "./components/random/random";
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

      <Random className="mb-1" min={0} max={50} />
      <Random className="mb-1" min={5} max={6} />
      <Random className="mb-1" min={3} max={10} />

      <BoxColor className="mb-1" r={255} g={0} b={0} />
      <BoxColor className="mb-1" r={0} g={255} b={0} />
      <BoxColor className="mb-1" r={0} g={255} b={255} />

      <CreditCard 
        className="mb-1"
        card={{
          type: "Visa",
          number: "0123456789016984",
          expirationMonth: 12,
          expirationYear: 2019,
          bank: "Name of the Bank",
          owner: "Firstname Lastname",
        }}
        bgColor="#ddbb55"
        color="white" 
      />
      <CreditCard
        className="mb-1"
        card={{
          type: "Master Card",
          number: "0123456789010995",
          expirationMonth: 3,
          expirationYear: 2021,
          bank: "N26",
          owner: "Maxence Bouret",
        }}
        bgColor="#eeeeee"
        color="#222222"
      />
    </div>
  );
}

export default App;