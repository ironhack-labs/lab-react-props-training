import IdCard from "./components/IdCard";

import "./App.css";

function App() {

  let people = [
     {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date("1992-07-14"),
      picture: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date("1988-05-11"),
      picture: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ]
  return (
    <section>
      <div className="App">
        <h1> LAB | React Training</h1>
      </div>

      <div>
        {people.map((person, index) => (
          <IdCard
          key={index}
          {...person}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
