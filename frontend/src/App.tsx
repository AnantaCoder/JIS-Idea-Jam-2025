import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cropai from "./Pages/Cropai";
import Homepage from "./Pages/Homepage";
import Liveweather from "./Pages/Liveweather";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Crop-ai" element={<Cropai />} />
        <Route path="/Live-weather" element={<Liveweather />} />
      </Routes>
    </Router>
  );
}

export default App;

/*<div className="min-h-screen bg-gray-900 text-white">
      <Homepage />
       <Cropai /> 
      </div>
  */
