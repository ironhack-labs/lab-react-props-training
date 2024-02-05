import "./App.css";
import "./component/Idcard"
import IdCard from "./component/Idcard";

import "./component/Greetings"
import Greetings from "./component/Greetings";

import "./component/Random"
import Random from "./component/Random";

import "./component/BoxColor"
import BoxColor from "./component/BoxColor";

function App() {
  
  


  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      
      <h2>ID CARDS</h2>

      <IdCard person = {{
        lastName:'Doe' ,
        firstName:'John' ,
        gender: 'male' ,
        height: 178 ,
        birth: ("1992-07-14") ,
        picture: "https://randomuser.me/api/portraits/men/44.jpg",
      }}/>

      <IdCard person = {{
        lastName: 'Delores ' ,
        firstName: 'Obrien' , 
        gender: 'female' , 
        height: 172 ,
        birth: ("1988-05-11") ,
        picture: "https://randomuser.me/api/portraits/women/44.jpg"
      }} />

      <h2>GREETINGS</h2>
      
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="en">Tushar</Greetings>

      <h2>RANDOM</h2>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h2>BOX COLOR</h2>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      
    </div>
    
  );
}

export default App;
