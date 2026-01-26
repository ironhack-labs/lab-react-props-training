import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import IdCard from "./components/IdCard";

function App() {
  return (
    <div id="mi-app">
      <IdCard
        firstName="John"
        lastName="Doe"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
    </div>
  );
}

export default App;
