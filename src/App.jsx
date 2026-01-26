import "./App.css";
import IdCard from "./components/IdCard";
import { Greetings } from "./components/Greetings";
import { BoxColour } from "./components/BoxColour";
import { RandomNumber } from "./components/RandomNumber";
function App() {
	return (
		<div>
			<div className="card-container">
				<h1> LAB | React Training</h1>
				<IdCard
					lastName="Doe"
					firstName="John"
					gender="male"
					height={178}
					birth={new Date("1992-07-14")}
					picture="https://randomuser.me/api/portraits/men/44.jpg"
				/>
				<IdCard
					lastName="Delores"
					firstName="Obrien"
					gender="female"
					height={172}
					birth={new Date("1988-05-11")}
					picture="https://randomuser.me/api/portraits/women/44.jpg"
				/>
				<Greetings lang="fr">, Nathalie</Greetings>
				<Greetings lang="pt">, João</Greetings>
				<Greetings lang="ru">, Юлия</Greetings>
			</div>
			<div className="box-container">
				<h1>Box Colour</h1>
				<BoxColour r={255} g={0} b={0} />
				<BoxColour r={128} g={255} b={0} />
			</div>
	  <div className="random-container">
		<h1>Random Number</h1>
		{RandomNumber}
	  </div>
	</div>
	);
}

export default App;
