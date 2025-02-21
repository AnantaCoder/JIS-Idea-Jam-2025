import product1Img from "../../assets/images/product1.png";
import product2Img from "../../assets/images/product2.png";
import { FeaturedProductCard } from "../../components/FeaturedProductCard";

const featuredProducts = [
    {
        imgSrc: product1Img,
        name: "AI Crop Predictor",
        href: "/crop-predictor",
    },
    {
        imgSrc: product2Img,
        name: "AI Yield Predictor",
        href: "/yield-predictor",
    },
];

export const FeaturedProducts = () => {
    return (
        <div id="products" className="py-24">
            <section className="container">
                <div className="flex flex-col items-center justify-center gap-14 md:gap-20">
                    <h2 className="text-3xl md:text-4xl font-semibold">Featured Products</h2>
                    <div className="flex flex-col gap-10 md:grid md:w-11/12 md:grid-cols-2 lg:w-2/3 xl:1/2">
                        {featuredProducts.map((product) => (
                            <FeaturedProductCard
                                key={product.name}
                                name={product.name}
                                imgSrc={product.imgSrc}
                                href={product.href}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
