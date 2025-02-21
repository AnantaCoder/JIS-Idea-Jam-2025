import { useState } from "react";
import { Footer } from "../sections/shared/Footer";
import { Header } from "../sections/shared/Header";

interface WeatherResult {
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    last_updated_epoch: EpochTimeStamp;
    condition: {
        icon: string;
        text: string;
    };
    location: string;
    error?: {
        code: number;
        message: string;
    };
}

async function fetchLiveWeather(location: string) {
    const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const res: Response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}&aqi=no`
    );
    const data = await res.json();
    if (data.error) return data;
    return {
        ...data.current,
        location: data.location.name + ", " + data.location.region + ", " + data.location.country,
    };
}

export const WeatherInfo = () => {
    const [formData, setFormData] = useState({
        location: "",
    });
    const [result, setResult] = useState<WeatherResult | null>(null);
    const [loading, setLoading] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulating API call
        const result = await fetchLiveWeather(formData.location);
        setResult(result);
        console.log(result);
        setLoading(false);
    };
    return (
        <>
            <Header />
            <section id="live-weather-form" className="py-20 min-h-screen px-4">
                <div className="max-w-4xl mx-auto text-white bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                    <div className="md:flex">
                        {/*Input form */}
                        <div className="md:flex-1 p-6 md:p-8">
                            <h2 className="text-3xl font-bold mb-6">Fetch Live Weather</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium mb-1">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition-colors"
                                    disabled={loading}>
                                    {loading ? "Analyzing..." : "Search"}
                                </button>
                            </form>
                        </div>
                        {/*Output side */}
                        <div className="md:flex-1 p-6 md:p-8 items-center bg-gray-700">
                            <h3 className="text-2xl font-bold mb-4">Live Weather</h3>
                            {result ? (
                                result.error ? (
                                    <div className="bg-gray-600 p-6 rounded-lg">
                                        <p className="text-gray-100">{result.error.message}</p>
                                    </div>
                                ) : (
                                    <div className="bg-gray-600 p-6 rounded-lg">
                                        <img
                                            src={result.condition.icon.replace("64x64", "128x128")}
                                            alt="Weather Image"
                                        />
                                        <p className="text-4xl font-bold text-green-400 mb-2">
                                            {result.condition.text}
                                        </p>
                                        <p className="text-gray-100">Temperate(°C): {result.temp_c}</p>
                                        <p className="text-gray-100">Feels Like(°C): {result.feelslike_c}</p>
                                        <p className="text-gray-100">Humidity: {result.humidity}</p>
                                        <p className="text-gray-400">Location: {result.location}</p>
                                        <p className="text-gray-400">
                                            Last Updated: {new Date(result.last_updated_epoch).toLocaleTimeString()}
                                        </p>
                                    </div>
                                )
                            ) : (
                                <p className="text-gray-400">
                                    Enter your location to know live weather updates of your location.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};
