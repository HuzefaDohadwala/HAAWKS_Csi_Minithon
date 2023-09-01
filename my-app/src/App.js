import logo from './logo.svg';
import './App.css';
import ThreeDScene from './ThreeDScene';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="font-cyberpunk text-4xl text-white">
        Hello, Cyberpunk!
      </div>
        <ThreeDScene />
    </div>
  );
}

export default App;
