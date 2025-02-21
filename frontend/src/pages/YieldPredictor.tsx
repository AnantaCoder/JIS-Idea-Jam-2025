import { useState } from "react";
import { Footer } from "../sections/shared/Footer";
import { Header } from "../sections/shared/Header";

interface YieldFormData {
    crop_year: string;
    area: string;
    production: string;
    annual_rainfall: string;
    fertilizer: string;
    pesticide: string;
    crop: string;
    season: string;
    state: string;
}

export const YieldPredictor = () => {
    const [formData, setFormData] = useState<YieldFormData>({
        crop_year: "",
        area: "",
        production: "",
        annual_rainfall: "",
        fertilizer: "",
        pesticide: "",
        crop: "",
        season: "",
        state: "",
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
                Crop_Year: parseFloat(formData.crop_year),
                Area: parseFloat(formData.area),
                Production: parseFloat(formData.production),
                Annual_Rainfall: parseFloat(formData.annual_rainfall),
                Fertilizer: parseFloat(formData.fertilizer),
                Pesticide: parseFloat(formData.pesticide),
                Crop: formData.crop, // Keep as string
                Season: formData.season, // Keep as string
                State: formData.state, // Keep as string
            };

            // Use relative path with leading slash
            const response = await fetch("/api/yield-prediction/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(apiData),
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            setResult(data.prediction);
        } catch (err) {
            let errorMessage = "Failed to get yeild prediction";
            if (err instanceof Error) errorMessage = err.message;
            setError(errorMessage);
            console.error("Prediction Error:", err);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <Header />
            <section id="yield-form" className="py-20 min-h-screen px-4">
                <div className="max-w-4xl mx-auto text-white bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                    <div className="md:flex">
                        {/* Input Form Section */}
                        <div className="md:flex-1 p-6 md:p-8">
                            <h2 className="text-3xl font-bold mb-6">Enter Your Yield Details</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Crop Year Input */}
                                <div>
                                    <label htmlFor="crop_year" className="block text-sm font-medium mb-1">
                                        Crop Year
                                    </label>
                                    <input
                                        type="number"
                                        id="crop_year"
                                        name="crop_year"
                                        value={formData.crop_year}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        min="0"
                                        required
                                    />
                                </div>

                                {/* Area Input */}
                                <div>
                                    <label htmlFor="area" className="block text-sm font-medium mb-1">
                                        Area
                                    </label>
                                    <input
                                        type="number"
                                        id="area"
                                        name="area"
                                        value={formData.area}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        min="0"
                                        required
                                    />
                                </div>

                                {/* Production Input */}
                                <div>
                                    <label htmlFor="production" className="block text-sm font-medium mb-1">
                                        Production
                                    </label>
                                    <input
                                        type="number"
                                        id="production"
                                        name="production"
                                        value={formData.production}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        min="0"
                                        required
                                    />
                                </div>

                                {/* Annual Rainfall Input */}
                                <div>
                                    <label htmlFor="annual_rainfall" className="block text-sm font-medium mb-1">
                                        Annual Rainfall (mm)
                                    </label>
                                    <input
                                        type="number"
                                        id="annual_rainfall"
                                        name="annual_rainfall"
                                        value={formData.annual_rainfall}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        min="-50"
                                        required
                                    />
                                </div>

                                {/* Fertilizer Input */}
                                <div>
                                    <label htmlFor="fertilizer" className="block text-sm font-medium mb-1">
                                        Fertilizer
                                    </label>
                                    <input
                                        type="number"
                                        id="fertilizer"
                                        name="fertilizer"
                                        value={formData.fertilizer}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        min="0"
                                        required
                                    />
                                </div>

                                {/* Pesticide Input */}
                                <div>
                                    <label htmlFor="pesticide" className="block text-sm font-medium mb-1">
                                        Pesticide
                                    </label>
                                    <input
                                        type="number"
                                        id="pesticide"
                                        name="pesticide"
                                        value={formData.pesticide}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        min="0"
                                        required
                                    />
                                </div>

                                {/* Crop Input */}
                                <div>
                                    <label htmlFor="crop" className="block text-sm font-medium mb-1">
                                        Crop
                                    </label>
                                    <input
                                        type="text"
                                        id="crop"
                                        name="crop"
                                        value={formData.crop}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        min="0"
                                        required
                                    />
                                </div>

                                {/* Season Input */}
                                <div>
                                    <label htmlFor="season" className="block text-sm font-medium mb-1">
                                        Season
                                    </label>
                                    <input
                                        type="text"
                                        id="season"
                                        name="season"
                                        value={formData.season}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        min="0"
                                        required
                                    />
                                </div>

                                {/* State Input */}
                                <div>
                                    <label htmlFor="state" className="block text-sm font-medium mb-1">
                                        State
                                    </label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        min="0"
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
                            <h3 className="text-2xl font-bold mb-4">Yield Prediction</h3>

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
                                        is the best yield for your land based on the provided data.
                                    </p>
                                </div>
                            ) : (
                                <p className="text-gray-400">Enter your land details to get a yield prediction.</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};
