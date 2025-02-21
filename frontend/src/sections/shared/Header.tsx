import { useRef, useState } from "react";
import MenuOpenIcon from "../../assets/icons/menu-open.svg?react";
import MenuCloseIcon from "../../assets/icons/menu-close.svg?react"; // Assuming you have a close icon
import { NavItem } from "../../components/NavItem";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLUListElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed top-0 z-10 w-full flex justify-center items-center shadow-md">
            <nav className="h-12 md:h-16 bg-white w-full flex items-center justify-between md:justify-around p-2 relative text-center">
                <a href="/" className="text-green-700 font-bold px-4 md:px-0 text-xl md:text-2xl">
                    CropSense.
                </a>
                {/* Nav Menu For Larger Screen Sizes */}
                <ul className="hidden md:flex md:gap-4 lg:gap-8 md:items-center md:justify-center">
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="#products">Products</NavItem>
                    <NavItem href="#features">Features</NavItem>
                    <NavItem href="#about">About Us</NavItem>
                </ul>
                <div className="flex items-center gap-4">
                    <button className="bg-green-800 text-white font-semibold py-1 text-center px-4 rounded-full hover:bg-green-900 transition-all duration-100 cursor-pointer lg:py-2 lg:px-6">
                        <span className="text-sm md:text-base lg:text-xl">Sign In</span>
                    </button>
                    <button
                        className="md:hidden hover:bg-gray-200 p-1 rounded-lg"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                        {isMenuOpen ? (
                            <MenuCloseIcon className="text-gray-900 size-6" />
                        ) : (
                            <MenuOpenIcon className="text-gray-900 size-6" />
                        )}
                    </button>
                </div>
                {/* Nav Menu For Smaller Screen Sizes */}
                <ul
                    className={`absolute top-12 left-0 w-full bg-white flex flex-col justify-center items-center gap-1.5 md:hidden shadow-md transition-all duration-300 ${
                        isMenuOpen ? "max-h-64 py-2" : "max-h-0 overflow-hidden"
                    }`}
                    ref={mobileMenuRef}>
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="#products">Products</NavItem>
                    <NavItem href="#features">Features</NavItem>
                    <NavItem href="#about">About Us</NavItem>
                </ul>
            </nav>
        </div>
    );
};
