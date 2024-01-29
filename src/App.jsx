import "./App.css";
import BoxColor from "./Components/BoxColor";
import Greetings from "./Components/Greetings";
import IdCard from "./Components/IdCard";
import Random from "./Components/Random";

function App() {
	return (
		<div className="App">
			<h1> LAB | React Training</h1>
			<IdCard
				lastName="Delores "
				firstName="Obrien"
				gender="female"
				height={172}
				birth={new Date("1988-05-11")}
				picture="https://randomuser.me/api/portraits/women/44.jpg"
			/>
			<Greetings lang="de">John</Greetings>
			<Random min={12} max={33} />
      <BoxColor red={255} green={0} blue={0} />
      <BoxColor red={145} green={214} blue={33} />
		</div>
	);
}

export default App;
