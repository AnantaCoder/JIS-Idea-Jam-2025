import anirbanImg from "../../assets/images/anirban.jpg";
import ayushImg from "../../assets/images/ayush.png";
import sourovImg from "../../assets/images/sourov.jpg";
import princeImg from "../../assets/images/prince.png";
import sayanImg from "../../assets/images/sayan.jpg";
import ankanImg from "../../assets/images/ankan.jpg";
import { MessageCard } from "../../components/MessageCard";

const messages = [
    {
        pictureSrc: anirbanImg,
        name: "Anirban Sarkar",
        role: "Team Leader, Machine Learning & Backend Expert",
        text: "Until death, every defeat is psychological, so do it the hard way.",
    },
    {
        pictureSrc: ayushImg,
        name: "Ayush Yadav",
        role: "Frontend Developer & Firebase Expert",
        text: "Crafting user-friendly interfaces and embracing cutting-edge technologies for efficient web development.",
    },
    {
        pictureSrc: sourovImg,
        name: "Sourov Mondal",
        role: "Frontend Engineer",
        text: "First, solve the problem. Then, write the code.",
    },
    {
        pictureSrc: princeImg,
        name: "Prince Raj",
        role: "Full-Stack Developer",
        text: "Not just yet another developer but the one willing to bring about an impact, one line of code at a time.",
    },
    {
        pictureSrc: sayanImg,
        name: "Sayan Sahoo",
        role: "Backend Developer",
        text: "Simplicity is the soul of efficiency.",
    },
    {
        pictureSrc: ankanImg,
        name: "Ankan Palai",
        role: "Frontend Engineer, Presentation Making",
        text: "Opportunities don't happen. You create them.",
    },
];

export const About = () => {
    return (
        <div id="about" className="py-24 bg-green-300/10">
            <section className="container">
                <div className="flex flex-col items-center justify-center gap-10">
                    <h2 className="text-3xl md:text-4xl font-semibold">Team Working Under The Hood</h2>
                    <div className="grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {messages.map((msg) => (
                            <MessageCard name={msg.name} pictureSrc={msg.pictureSrc} role={msg.role} text={msg.text} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
