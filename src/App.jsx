import "./App.css";
import IdCard from "./components/IdCard.jsx";

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height="1.78m"
        birth="Tue Jul 14 1992"
        imageSrc="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height="1.72m"
        birth="Tue May 11 1993"
        imageSrc="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}

export default App;
