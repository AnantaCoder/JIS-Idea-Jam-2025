import { Link } from "react-router-dom";

export const FeaturedProductCard = ({ imgSrc, name, href }: { imgSrc: string; name: string; href: string }) => {
    return (
        <div className="rounded-xl pb-6 w-full overflow-clip flex flex-col gap-4 shadow-sm md:col-span-1 lg:shadow-none">
            <div className="w-full">
                <img src={imgSrc} alt={name} />
            </div>
            <div className="px-4">
                <h4 className="text-xl font-semibold mb-4 md:text-2xl">{name}</h4>
                <Link
                    to={href}
                    className="block bg-green-700/90 text-white text-center rounded-xl py-2 font-semibold md:text-xl md:py-3.5">
                    View Details
                </Link>
            </div>
        </div>
    );
};
