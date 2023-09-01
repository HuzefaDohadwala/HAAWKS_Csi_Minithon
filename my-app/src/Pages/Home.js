import ThreeDScene from "../ThreeDScene";
import NavBar from "../Components/Navbar/NavBar";

function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
        <NavBar />
        <h1 className="font-cyberpunk absolute text-8xl font-bold text-yellow-400 z-50 top-48">
          Cyberpunk
        </h1>
        <ThreeDScene />
    </div>
  );
}

export default Home;
