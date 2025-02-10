import Footer from "../Components/Footer";
import LWfirst from "../Components/Live-weather/LWfirst";
import Navbar from "../Components/Navbar";

const Liveweather = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <LWfirst />
      </main>
      <Footer />
    </div>
  );
};

export default Liveweather;
