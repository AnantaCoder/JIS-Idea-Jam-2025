import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { CropPredictor } from "./pages/CropPredictor";
import { YieldPredictor } from "./pages/YieldPredictor";
import { WeatherInfo } from "./pages/WeatherInfo";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/weather-info" element={<WeatherInfo />} />
                <Route path="/crop-predictor" element={<CropPredictor />} />
                <Route path="/yield-predictor" element={<YieldPredictor />} />
            </Routes>
        </Router>
    );
}

export default App;
