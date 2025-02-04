import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import BoxColor from "./components/BoxColor";

function App() {
  return (
    <>
      <div> 
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
      </div>
      <div>
        <Greetings lang="de">Ludwig</Greetings>
      </div>
      <div>
        <BoxColor r={255} g={0} b={0} />
      </div>
    </>
  );
}

export default App;
