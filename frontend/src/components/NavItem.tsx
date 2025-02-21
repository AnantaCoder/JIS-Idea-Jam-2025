import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export const NavItem = ({ children, href }: PropsWithChildren<{ href: string }>) => {
    return (
        <li className="pt-2 relative after:content-[''] after:w-0 after:h-0.5 after:bg-green-800 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
            {href[0] === "#" ? (
                <a
                    href={href}
                    className="text-base lg:text-lg text-gray-500 font-semibold hover:text-green-800 md:py-0.5">
                    {children}
                </a>
            ) : (
                <Link
                    to={href}
                    className="text-base lg:text-lg text-gray-500 font-semibold hover:text-green-800 md:py-0.5">
                    {children}
                </Link>
            )}
        </li>
    );
};
