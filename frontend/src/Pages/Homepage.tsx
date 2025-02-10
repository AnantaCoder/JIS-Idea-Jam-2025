import Footer from "../Components/Footer";
import Hero from "../Components/Homepage/Hero";
import Navbar from "../Components/Navbar";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
