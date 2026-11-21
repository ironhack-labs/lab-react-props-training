import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import IdCard from './components/id-card';
import './components/id-card.css'
import Greetings from './components/greetings';
import './components/greetings.css'
import Random from './components/random';
import './components/random.css'
import BoxColor from './components/box-color';
import './components/box-color.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
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
    <Random min={1} max={6}/>
    <Random min={1} max={100}/>
    <BoxColor r={255} g={0} b={0} />
    <BoxColor r={128} g={255} b={0} />

  </React.StrictMode>
);
