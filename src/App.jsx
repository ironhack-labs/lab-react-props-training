import Container from "./components/Container";
import IdCard from "./components/IdCard";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import "./App.css";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
     
      <IdCard 
       lastName='Doe'
       firstName='John'
       gender='male'
       height={178}
       birth={new Date("1992-07-14").toDateString()}
       picture="https://randomuser.me/api/portraits/men/44.jpg"/>
     
      <IdCard
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth={new Date("1988-05-11").toDateString()}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
      <Container lang="de"> Ludwig</Container>
      <Container lang="fr"> François</Container>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
     
      <BoxColor r={255} g={0} b={0}>

        <h1>  rgb(255,0,0) </h1>
          <h1>#ff0000</h1>

      </BoxColor>
       
      
      <BoxColor r={128} g={255} b={0}>

       <h1>    rgb(128,255,0)   </h1>
        <h1>#80ff00</h1>

      </BoxColor>
         
    </div>
  );
}

export default App;
