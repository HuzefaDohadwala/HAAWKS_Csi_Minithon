import logo from "./logo.svg";
import "./App.css";
import ThreeDScene from "./ThreeDScene";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
        <h1 className="font-cyberpunk absolute text-8xl font-bold text-yellow-400 z-50 top-48">
          Cyberpunk
        </h1>
        <ThreeDScene />
    </div>
  );
}

export default App;
