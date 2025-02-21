export const TestimonialCard = ({
    pictureSrc,
    name,
    role,
    text,
}: {
    pictureSrc: string;
    name: string;
    role: string;
    text: string;
}) => {
    return (
        <div className="bg-white p-5 rounded-xl shadow-md w-full">
            <div className="flex items-center gap-4 pb-2">
                <div className="w-12 rounded-full overflow-clip">
                    <img src={pictureSrc} alt={name} />
                </div>
                <div className="flex flex-col items-center justify-center ">
                    <h5 className="font-semibold">{name}</h5>
                    <p>{role}</p>
                </div>
            </div>
            <p className="text-sm italic pt-1 text-gray-900/90">"{text}"</p>
        </div>
    );
};
