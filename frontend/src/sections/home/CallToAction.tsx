import ctaImage from "../../assets/images/cta.png";
import QuestionIcon from "../../assets/icons/question.svg?react";
import FlaskIcon from "../../assets/icons/flask.svg?react";

export const CallToAction = () => {
    return (
        <div className="py-20 bg-yellow-300/10">
            <section className="container">
                <div className="flex flex-col gap-16 items-center justify-center lg:flex-row">
                    <div className="w-full md:w-2xl lg:w-7xl rounded-xl shadow-xl shadow-gray-900/10">
                        <img src={ctaImage} alt="Cta" className="rounded-xl" />
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h2 className="text-2xl font-semibold md:text-4xl">
                            AI Solutions for Sustainable and Profitable Farming
                        </h2>
                        <p className="text-base md:text-xl text-gray-900/90 pb-5 lg:max-w-5/6">
                            Our AI-driven software and hardware solutions help farmers make data-driven decisions,
                            increase their yields, and reduce costs. Join our community to learn more about how AI is
                            transforming agriculture.
                        </p>
                        <div className="flex flex-col gap-4 md:flex-row">
                            <div className="bg-white rounded-xl p-5 md:w-1/2">
                                <div className="size-10">
                                    <QuestionIcon className="text-orange-400/60" />
                                </div>
                                <h5 className="text-xl font-semibold pt-2 md:pt-4 md:text-2xl">2,00,000+</h5>
                                <p className="text-lg md:text-xl md:pt-2.5">Fields Of Training Data</p>
                            </div>
                            <div className="bg-white rounded-xl p-5 md:w-1/2">
                                <div className="size-10">
                                    <FlaskIcon className="text-orange-400/60" />
                                </div>
                                <h5 className="text-xl font-semibold pt-2 md:pt-4 md:text-2xl">
                                    Innovative AI Solutions
                                </h5>
                                <p className="text-lg md:text-xl md:pt-2.5">Empowering Farmers</p>
                            </div>
                        </div>
                        <div className="w-full md:flex md:flex-col md:items-center lg:items-start">
                            <button className="bg-orange-400/90 rounded-lg text-white py-3 font-semibold text-lg my-2 md:text-xl md:py-5 w-full md:w-3/4 lg:w-2/3">
                                Join Now To Stay Ahead
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
