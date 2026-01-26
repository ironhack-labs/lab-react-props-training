import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";

function App() {
  return (
    <div>
      <h1>LAB | React Training</h1>
      <IdCard
        lastName="Cruyff"
        firstName="Johan"
        gender="male"
        height={178}
        birth={new Date("1947-04-25")}
        picture="https://preview.redd.it/5qtddorejob31.jpg?auto=webp&s=8b21b1b0a515f91e2f8f7752f86263a36aaf6176"
      />

      <IdCard
        lastName="Maradona"
        firstName="Diego"
        gender="male"
        height={165}
        birth={new Date("1960-10-30")}
        picture="https://www.parismatch.com/lmnr/r/960,640,FFFFFF,forcex,center-middle/img/var/pm/public/styles/paysage/public/media/image/2022/03/01/03/Maradona-les-derniers-jours.jpg?VersionId=6QZpqLtS_x8LeSLvbqGJqVYWQ849a2UK"
      />

      <Greetings lan="Hallo" firstName="Johan"/>
      <Greetings lan="Hello" firstName="Diego"/>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

    </div>
  );
}

export default App;