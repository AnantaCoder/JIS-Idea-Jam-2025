import { SVGProps } from "react";

export const FeatureCard = ({
    icon,
    title,
    paragraph,
}: {
    icon: React.FunctionComponent<SVGProps<SVGSVGElement>> | string;
    title: string;
    paragraph: string;
}) => {
    const IconComponent = icon;
    return (
        <div className="bg-green-200/40 rounded-xl p-4 shadow-md transition-all duration-200 md:col-span-2 md:w-full lg:min-h-[240px]">
            <div className="size-10 md:size-14 mt-1">
                {typeof icon === "string" ? (
                    <img src={icon} alt={title} />
                ) : (
                    <IconComponent className="text-green-700/90" />
                )}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
            <p className="text-lg md:text-xl text-gray-600 py-4">{paragraph}</p>
        </div>
    );
};
