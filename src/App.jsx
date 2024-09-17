import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";

function App() {
  return (
    <div className="App"> 
      
      <div className="persona">
      
      <IdCard
      picture={"https://www.pngkit.com/png/full/888-8880443_pensando-especialmente-en-las-personas-con-movilidad-imagenes.png"}
      
        lastName={"Johansson"}
        firstName={"Luca"}
        gender={"male"}
        height={178}
        birth={new Date("11-12-2013")}
      
      
      />
      </div>

      <div>
        <Greetings
          lang={"fr"}
          children={"lola"}
        />
      </div>
      
      <div>
      <Random min={1} max={58}/>
      <Random min={1} max={100}/>
      <Random min={1} max={30}/>
      </div>

      <div className="aaa">
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      </div>


      <div>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="brown"
        color="white" 
      />

      </div>

    </div>

  );
}

export default App;
