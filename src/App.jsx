import "./App.css";
import { IdCard } from "./components/IdCard";

const names = [
  {
    firstName: "John",
    lastName: 'Doe',
    gender: 'male' ,
    height: 178,
    birth: "1992-07-14",
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
{
    firstName: "John",
    lastName: 'Doe',
    gender: 'male' ,
    height: 178,
    birth: "1992-07-14",
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
]

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div>
      {
        names.map((name) => {
          return <IdCard {...name} />
        })
      }
      </div>
    </div>
  );
}

export default App;
