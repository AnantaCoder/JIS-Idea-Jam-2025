import CropForm from "../Components/CropAI/Cropform";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Cropai = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <CropForm />
      </main>
      <Footer />
    </div>
  );
};

export default Cropai;
