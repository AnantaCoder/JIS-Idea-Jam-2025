import { Features } from "../sections/home/Features";
import { Header } from "../sections/shared/Header";
import { Hero } from "../sections/home/Hero";
import { CallToAction } from "../sections/home/CallToAction";
import { FeaturedProducts } from "../sections/home/FeaturedProducts";
import { About } from "../sections/home/About";
import { Footer } from "../sections/shared/Footer";

export const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <CallToAction />
            <FeaturedProducts />
            <About />
            <Footer />
        </>
    );
};
