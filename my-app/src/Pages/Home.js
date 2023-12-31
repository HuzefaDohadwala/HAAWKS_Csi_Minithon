import ThreeDScene from "../ThreeDScene";
import backgroundImage from '../img/back.jpg';  // Import the image

function Home() {
  return (
    <div className="flex justify-center items-center h-screen"
    style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center' 
    }} >
        <h1 className="font-cyberpunk absolute text-8xl font-bold text-yellow-400 z-50 top-48">
          Cyberpunk.ID
        </h1>
        <ThreeDScene />
        <h1 className="font-cyberpunk absolute text-4xl font-bold text-purple-500 z-50 top-[40rem]">
          City's Control Center for Citizens.
        </h1>
    </div>
  );
}

export default Home;
