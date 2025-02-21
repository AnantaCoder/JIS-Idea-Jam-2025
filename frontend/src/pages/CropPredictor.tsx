import { useState } from "react";
import { Footer } from "../sections/shared/Footer";
import { Header } from "../sections/shared/Header";

interface CropFormData {
    nitrogen: string;
    phosphorus: string;
    potassium: string;
    temperature: string;
    humidity: string;
    pH: string;
    rainfall: string;
}

export const CropPredictor = () => {
    const [formData, setFormData] = useState<CropFormData>({
        nitrogen: "",
        phosphorus: "",
        potassium: "",
        temperature: "",
        humidity: "",
        pH: "",
        rainfall: "",
    });

    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const apiData = {
                N: parseFloat(formData.nitrogen),
                P: parseFloat(formData.phosphorus),
                K: parseFloat(formData.potassium),
                temperature: parseFloat(formData.temperature),
                humidity: parseFloat(formData.humidity),
                ph: parseFloat(formData.pH),
                rainfall: parseFloat(formData.rainfall),
            };

            // Use relative path with leading slash
            const response = await fetch("/api/crop-prediction/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(apiData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setResult(data.prediction); // Update result state
        } catch (err) {
            // Handle errors
            let errorMessage = "Failed to get crop recommendation";

            if (err instanceof Error) {
                errorMessage = err.message;
            }

            setError(errorMessage);
            console.error("Prediction Error:", err);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <Header />
            <div className="py-20 min-h-screen px-4">
                <section className="max-w-4xl text-white mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                    <div className="md:flex">
                        {/* Input Form Section */}
                        <div className="md:flex-1 p-6 md:p-8">
                            <h2 className="text-3xl font-bold mb-6">Enter Your Land Details</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Nitrogen Input */}
                                <div>
                                    <label htmlFor="nitrogen" className="block text-sm font-medium mb-1">
                                        Nitrogen (%)
                                    </label>
                                    <input
                                        type="number"
                                        id="nitrogen"
                                        name="nitrogen"
                                        value={formData.nitrogen}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        min="0"
                                        max="100"
                                        step="0.1"
                                        required
                                    />
                                </div>

                                {/* Phosphorus Input */}
                                <div>
                                    <label htmlFor="phosphorus" className="block text-sm font-medium mb-1">
                                        Phosphorus (%)
                                    </label>
                                    <input
                                        type="number"
                                        id="phosphorus"
                                        name="phosphorus"
                                        value={formData.phosphorus}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        min="0"
                                        max="100"
                                        step="0.1"
                                        required
                                    />
                                </div>

                                {/* Potassium Input */}
                                <div>
                                    <label htmlFor="potassium" className="block text-sm font-medium mb-1">
                                        Potassium (%)
                                    </label>
                                    <input
                                        type="number"
                                        id="potassium"
                                        name="potassium"
                                        value={formData.potassium}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        min="0"
                                        max="100"
                                        step="0.1"
                                        required
                                    />
                                </div>

                                {/* Temperature Input */}
                                <div>
                                    <label htmlFor="temperature" className="block text-sm font-medium mb-1">
                                        Temperature (°C)
                                    </label>
                                    <input
                                        type="number"
                                        id="temperature"
                                        name="temperature"
                                        value={formData.temperature}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        min="-50"
                                        max="50"
                                        step="0.1"
                                        required
                                    />
                                </div>

                                {/* Humidity Input */}
                                <div>
                                    <label htmlFor="humidity" className="block text-sm font-medium mb-1">
                                        Humidity (%)
                                    </label>
                                    <input
                                        type="number"
                                        id="humidity"
                                        name="humidity"
                                        value={formData.humidity}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        min="0"
                                        max="100"
                                        step="0.1"
                                        required
                                    />
                                </div>

                                {/* pH Input */}
                                <div>
                                    <label htmlFor="pH" className="block text-sm font-medium mb-1">
                                        Soil pH
                                    </label>
                                    <input
                                        type="number"
                                        id="pH"
                                        name="pH"
                                        value={formData.pH}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        min="0"
                                        max="14"
                                        step="0.1"
                                        required
                                    />
                                </div>

                                {/* Rainfall Input */}
                                <div>
                                    <label htmlFor="rainfall" className="block text-sm font-medium mb-1">
                                        Annual Rainfall (mm)
                                    </label>
                                    <input
                                        type="number"
                                        id="rainfall"
                                        name="rainfall"
                                        value={formData.rainfall}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        min="0"
                                        step="0.1"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition-colors disabled:opacity-50"
                                    disabled={loading}>
                                    {loading ? "Analyzing..." : "Get Recommendation"}
                                </button>
                            </form>
                        </div>

                        {/* Results Section */}
                        <div className="md:flex-1 p-6 md:p-8 items-center bg-gray-700">
                            <h3 className="text-2xl font-bold mb-4">Recommended Crop</h3>

                            {error && <div className="bg-red-500 text-white p-4 rounded-lg mb-4">Error: {error}</div>}

                            {loading ? (
                                <div className="text-center py-8">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400 mx-auto"></div>
                                    <p className="mt-4 text-gray-300">Analyzing soil data...</p>
                                </div>
                            ) : result ? (
                                <div className="bg-gray-600 p-6 rounded-lg">
                                    <p className="text-4xl font-bold text-green-400 mb-2">{result}</p>
                                    <p className="text-gray-300">
                                        is the best crop for your land based on the provided data.
                                    </p>
                                </div>
                            ) : (
                                <p className="text-gray-400">Enter your land details to get a crop recommendation.</p>
                            )}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};
