import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <section>

   <div className="App">
      <LikeButton />
      <LikeButton />
      <LikeButton />
    </div>

    <div className="App">
      <Counter />
      <Counter />
    </div>

    <div className="App">
      <ClickablePicture
        img2="http://www.stickpng.com/assets/images/584999937b7d4d76317f5ffd.png"
      />
    </div>
     <div className="App">
      <Dice />
    </div>

    </section>
  );
}

export default App;
