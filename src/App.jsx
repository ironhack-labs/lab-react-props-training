import "./App.css";
import Greetings from "./components/Greetings";
import IdCard from "./components/IdCard";
import Random from "./components/Random";
import berlinData from './data/berlin.json';
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div className="card-container">
        <div className="body-card credit-card">
          <CreditCard
            type="Master Card"
            number="···········0995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />
        </div >
        <div className="body-card credit-card mastercard">
          <CreditCard
            type="Visa"
            number="···········6984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />
        </div>
        <div className="body-card credit-card visa">
          <CreditCard
            type="Visa"
            number="···········6984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />
        </div>
      </div>
      <div className="random">
        <Greetings lang="de">Ludwig</Greetings>
      </div>
      <div className="random">
        <Greetings lang="fr">François</Greetings>
      </div>
      <div className="random">
        <Random min={1} max={6} />
      </div>
      <div className="random">
        <Random min={1} max={100} />
      </div>
      <div >
        <BoxColor r={255} g={0} b={0} />
      </div>
      <div>
        <BoxColor r={128} g={255} b={0} />
      </div>

      {berlinData.map((person) => {
        return (
          <IdCard
            key={person.firstName}
            lastName={person.lastName}
            firstName={person.firstName}
            gender={person.gender}
            height={172}
            birth={person.date}
            picture={person.img}
          />
        );
      })}

    </div>
  );
}

export default App;
