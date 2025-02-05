import './index.css';
import Idcard from "./Components/Idcard";
import Greetings from "./Components/greetings"
import Random from './Components/Random';
import BoxColor from "./Components/BoxColor"
import CreditCard from './Components/Creditcard';

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div>
      <Idcard
      
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
      </div>
    
<div>
  
  <Idcard
    lastName='Delores '
    firstName='Obrien'
    gender='female'
    height={172}
    birth={new Date("1988-05-11")}
    picture="https://randomuser.me/api/portraits/women/44.jpg"
  />
</div>
<div>
<Greetings
 lang="de">Ludwig</Greetings> 
<Greetings lang="en">John</Greetings> 
<Greetings lang="fr">François</Greetings>
<Greetings lang="es">Carlos</Greetings>
<Greetings lang="it">Marco</Greetings> 
</div>
<div className='border'>
    <Random min={1} max={10} />
    <Random min={50} max={100} />
  </div>
<div>
  <BoxColor r={255} g={0} b={0}/>
  <BoxColor r={129} g={250} b={150}/>
</div>
<div className='Creditcard'>
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
  <div className='Creditcard'>
<CreditCard 
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
/>
</div> 
<div className='Creditcard'>
<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" 
/>
</div>
</div>
 
  );
}

export default App;
