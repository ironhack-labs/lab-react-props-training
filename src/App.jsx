import "./App.css";
import { BoxColor } from "./components/BoxColor";
import { GreetingCard } from "./components/GreetingCard";
import { IdCard } from "./components/IdCard";

const names = [
  {
    id: 1,
    firstName: "John",
    lastName: 'Doe',
    gender: 'male' ,
    height: 178,
    birth: "1992-07-14",
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
{
  id: 2,
    firstName: "John",
    lastName: 'Doe',
    gender: 'male' ,
    height: 188,
    birth: "1992-07-15",
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
]

const languages = [
  {
    id: 1,
    lang: "de",
    greet: "Hallo",
  },
  {
    id: 2,
    lang: "fr",
    greet: "Bonjour",
  },
  {
    id: 3,
    lang: "es",
    greet: "Hola",
  },
  {
    id: 4,
    lang: "en",
    greet: "Hello",
  },
]

const boxColors = [
  {
    id: 1,
    r: 255,
    g: 0,
    b: 0,
  },
  {
    id: 2,
    r: 128,
    g: 255,
    b: 0,
  },
  {
    id: 3,
    r: 0,
    g: 0,
    b: 255,
  },
]

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <h3>IdCard</h3>
      <div>
      {
        names.map((name) => {
          return <IdCard key={name.id} {...name} />
        })
      }
      </div>

    <h3>Greetings</h3>
    <div>
          <GreetingCard lang='de'> Ludwig </GreetingCard>
          <GreetingCard lang='fr'> Francois </GreetingCard>
    </div>

    <h3>Box Color</h3>
      <div>
      {
        boxColors.map((el) => {
          return  <BoxColor key={el.id} {...el} /> 
        })
              }
            </div>

    </div>
  );
}

export default App;
