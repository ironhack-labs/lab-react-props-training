import { BoxColor } from "../components/BoxColor";
import { Greetings } from "../components/Greetings";
import IdCard from "../components/IdCard";
import { Random } from "../components/Random";
import "./App.css";

function App() {
	let propIdCard = {
		lastName: "Rueda",
		firstName: "Luis",
		gender: "Male",
		height: 0,
		birth: new Date(),
		picture: "",
	};
	return (
		<div className="App">
			<h1> LAB | React Training</h1>
			<IdCard propIdCard={propIdCard} />
			<div>
				<Greetings lang="de">Ludwig</Greetings>
				<Greetings lang="fr">François</Greetings>
				<Greetings lang="es">Carlos</Greetings>
				<Greetings lang="en">Joshua</Greetings>
				<div>
					<Random min={1} max={6} />
					<Random min={1} max={100} />
				</div>
				<div>
					<BoxColor r={255} g={0} b={0} />
					<BoxColor r={128} g={255} b={0} />
				</div>
			</div>
		</div>
	);
}

export default App;
