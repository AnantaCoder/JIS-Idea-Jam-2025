export const MessageCard = ({
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
        <div className="bg-white p-5 rounded-xl shadow-md w-full h-full">
            <div className="flex items-center gap-4 pb-2">
            <div className="rounded-full object-cover overflow-clip">
                    <img src={pictureSrc} alt={name} className="size-12 object-cover object-center" />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <h5 className="font-semibold">{name}</h5>
                    <p className="text-xs md:text-sm text-gray-700/80">{role}</p>
                </div>
            </div>
            <p className="text-sm italic pt-1 text-gray-900/90">"{text}"</p>
        </div>
    );
};
