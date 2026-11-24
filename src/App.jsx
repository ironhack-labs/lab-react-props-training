import "./App.css";
import IdCards from "./components/id-card";
import Greeting from "./components/greeting";
import Random from "./components/random";
import BoxColor from "./components/box-color";
import CreditCard from "./components/credit-card";

function App() {
  return (
    <div className="App">

      <IdCards
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={new Date("1992-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"/>

      <IdCards
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth={new Date("1988-05-11")}
      picture="https://randomuser.me/api/portraits/women/44.jpg"/>

      <Greeting lang="de">Ludwig</Greeting>

      <Greeting lang="fr">François</Greeting>

      <Random min= {1} max = {10}></Random>

      <Random min= {5} max = {9}></Random>

      <BoxColor r={255} g={0} b={0} />

      <BoxColor r={128} g={255} b={0} />
      
      <BoxColor r={80} g={20} b={120} />

      <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="BNP"
          owner="Israel Duarte"
          bgColor="#ddbb55"
          color="white" 
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#9e9191"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        />

    </div>

    

  );
}

export default App;
