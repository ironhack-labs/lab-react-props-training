import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import IdCard from "./components/IdCard";
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    
    <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

<Greetings lang="es"/>
<Greetings lang="fr"/>
<Greetings lang="de"/>
<Greetings lang="en"/>

<Random min={1} max={6}/>
<Random min={1} max={100}/>

<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />
<BoxColor r={5} g={255} b={200} />

  </React.StrictMode>
);
