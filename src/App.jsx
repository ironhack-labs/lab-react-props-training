import "./App.css";
import IDCard from './components/IDCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
	return (
		<div className='App'>
			<h1> LAB | React Training</h1>
			<IDCard
				lastName='Doe'
				firstName='John'
				gender='male'
				height={178}
				birth={new Date('1992-07-14')}
				picture='https://randomuser.me/api/portraits/men/44.jpg'
			/>
			<IDCard
				lastName='Delores '
				firstName='Obrien'
				gender='female'
				height={172}
				birth={new Date('1988-05-11')}
				picture='https://randomuser.me/api/portraits/women/44.jpg'
			/>
			<Greetings lang='de'>Ludwig</Greetings>
			<Greetings lang='fr'>François</Greetings>
			<Greetings lang='es'>José</Greetings>
			<hr />
			<Random min={1} max={6} />
			<Random min={1} max={100} />
			<hr />
			<BoxColor r={255} g={0} b={0} />
			<BoxColor r={128} g={255} b={0} />
		</div>
	);
}

export default App;
