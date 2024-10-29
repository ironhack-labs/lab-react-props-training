import "./App.css";
import IDCard from './components/IDCard';

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
		</div>
	);
}

export default App;
