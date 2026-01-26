import React from 'react';
import IdCard from './components/id-card.jsx'; 
import Greetings from './components/greetings.jsx';
import Random from './components/random.jsx';
import BoxColor from './components/box-color.jsx';

function App() {
  return (
    <>

      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Obrien"
        firstName="Delores"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Carlos</Greetings>
      <Greetings lang="en">John</Greetings>

            <Random min={1} max={6} />
            <Random min={1} max={100} />

            <BoxColor r={255} g={0} b={0} />
            <BoxColor r={128} g={255} b={0} />
    </>
  );
}

export default App;