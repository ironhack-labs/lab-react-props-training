import "./App.css";


import Greetings from "./components/Greetings"
import IdCard from './components/IdCard'
import Random from "./components/Random"
import BoxColor from "./components/BoxColor"

function App() {




return (
  <div>
 
<div>

<IdCard  
    firstName ='John'
    lastName ='Doe'
    gender  ='male'
    height = {178}
    birth = {new Date("1992-07-14")}
    picture= "https://randomuser.me/api/portraits/men/44.jpg"
/>
 
</div>

<div>
<IdCard 
    firstName ='Obrien'
    lastName ='Delores'
    gender = 'female'
    height = {172}
    birth = {new Date("1988-05-11")}
    picture = "https://randomuser.me/api/portraits/women/44.jpg"
/>
</div>

<div>
  <Greetings lang = "es">piyush</Greetings>
  <Greetings lang = "fr">tomas</Greetings>
  <Greetings  lang = "de">piyush</Greetings> 
  <Greetings lang = "en">tomas</Greetings> 
</div>

<div>
  <Random min = {1} max = {6} />
  <Random min = {1} max = {100} />
</div>

<div>
<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />
</div>
    
  </div>
   
  );
}

export default App;
