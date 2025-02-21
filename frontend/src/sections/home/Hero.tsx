import heroImage from "../../assets/images/farm.png";

export const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-green-100/80 to-green-100/0 pt-12 md:pt-16 relative z-0">
            <section className="container">
                <div className="text-center md:text-left flex flex-col md:flex-row items-center justify-around overflow-y-clip">
                    <div className="h-[85vh] flex flex-col items-center justify-center gap-4">
                        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold md:mr-12 lg:mr-16">
                            Growing Tomorrow's Agriculture Today
                        </h2>
                        <p className="text-sm md:text-base lg:text-2xl md:mr-12">
                            Access modern agricultural solutions, and grow your farming business with our comprehensive
                            platform.
                        </p>
                        <div className="flex flex-col gap-4 w-2/3 md:w-full pt-10 md:flex-row md:justify-center lg:justify-start lg:gap-8">
                            <button className="bg-green-700 text-white font-medium lg:font-normal py-1 text-center px-4 rounded-full hover:bg-green-900 transition-all duration-100 cursor-pointer md:text-lg lg:text-2xl md:py-2 md:px-6">
                                Get Started
                            </button>
                            <a
                                href="#features"
                                className="bg-transparent outline outline-green-700 text-green-700 font-medium lg:font-normal py-1 text-center px-4 rounded-full hover:bg-green-700/10 transition-all duration-100 cursor-pointer md:text-lg lg:text-2xl md:py-2 md:px-6">
                                <button className="cursor-pointer">Learn More</button>
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-2xl lg:w-5xl rounded-xl shadow-xl shadow-gray-900/30 backdrop-blur-sm">
                        <img src={heroImage} alt="Farm" className="rounded-xl" />
                    </div>
                </div>
            </section>
        </div>
    );
};
