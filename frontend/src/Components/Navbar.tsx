import { Link } from "react-router-dom";
import { GoogleSignInUser } from "../Utilities/Firebase";
const Navbar = () => {
  return (
    <header className="fixed w-full z-10 bg-gray-900 bg-opacity-80 backdrop-blur-md">
      <div className="container mx-auto px-10 py-4 flex justify-between  items-center">
        <p className="text-2xl font-bold text-green-400">CropSense</p>
        <nav>
          <ul className="flex text-xl space-x-6 font-semibold">
            <li>
              <Link
                to="/Crop-ai"
                className="hover:text-green-400 text-white cursor-pointer transition-colors"
              >
                Crop AI
              </Link>
            </li>
            <li>
              <Link
                to="/Live-weather"
                className="hover:text-green-400 cursor-pointer text-white transition-colors"
              >
                Live Weather
              </Link>
            </li>

            <button
              onClick={GoogleSignInUser}
              className="hover:text-green-400 cursor-pointer flex items-center gap-2 text-white transition-colors"
            >
              Sign Up
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Home
// Crop Recommendations
// Live Weather
// Tasks
// User Settings
// Geo static crop prediction(if testing done then)
// Charts

export default Navbar;
