const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* <canvas ref={canvasRef} className="absolute inset-0" /> */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          CropSense
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Discover the perfect crop for your land with our AI-powered
          recommendation engine.
        </p>
        <a
          href="#crop-form"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors text-lg"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;
