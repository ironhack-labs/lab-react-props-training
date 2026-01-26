import "./App.css";
import React from 'react';
import IdCard from './IdCard';
import Greetings from "./Greetings";
import Random from "./Random";



function App() {
  return (
    <>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />   
      <BoxColor r={0} g={255} b={0} />   
      <BoxColor r={0} g={0} b={255} />   
      <BoxColor r={128} g={128} b={128} /> 
    </>
  );
};



export default App
