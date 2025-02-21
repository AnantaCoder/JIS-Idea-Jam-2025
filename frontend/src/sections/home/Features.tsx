import { FeatureCard } from "../../components/FeatureCard";
import feature1Img from "../../assets/images/feature1.png";
import feature2Img from "../../assets/images/feature2.png";
import MarketIcon from "../../assets/icons/market.svg?react";

const featureItems = [
    {
        icon: feature1Img,
        title: "AI-based Crop Prediction",
        paragraph: "Use AI to predict the most suitable crops for your farm based on weather and soil conditions.",
    },
    {
        icon: feature2Img,
        title: "AI-based Yield Prediction",
        paragraph:
            "Utilize AI technology to predict farm yields accurately, helping optimize production and resource management.",
    },
    {
        icon: MarketIcon,
        title: "Data-Driven Decision Making",
        paragraph:
            "Make informed decisions with our AI-powered software and hardware solutions that provide real-time insights into your farm's operations.",
    },
];
export const Features = () => {
    return (
        <div id="features" className="py-24 lg:pt-36">
            <section className="container">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl lg:text-3xl font-semibold lg:font-bold">Why Choose CropSense</h1>
                    <div className="flex flex-col md:items-center mt-8 lg:mt-16 gap-5 md:gap-10 lg:flex-row">
                        {featureItems.map((item) => (
                            <FeatureCard icon={item.icon} title={item.title} paragraph={item.paragraph} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
