import CropSenseLogo from "../../assets/icons/crop-sense.svg?react";
import MailIcon from "../../assets/icons/mail.svg?react";
import PhoneIcon from "../../assets/icons/phone.svg?react";

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <ul className="grid items-center justify-evenly md:items-start grid-cols-1 md:grid-cols-3 gap-5">
                    <li className="flex flex-col md:items-center gap-2">
                        <div className="flex items-center gap-3">
                            <CropSenseLogo className="size-12" />
                            <h2 className="font-bold text-2xl">CropSense.</h2>
                        </div>
                        <p className="text-gray-400 text-sm">Empowering farmers with technology and community.</p>
                    </li>
                    <li className="flex flex-col md:items-center gap-2">
                        <h2 className="font-bold text-xl">Quick Links</h2>
                        <ul className="text-gray-400">
                            <li className="mt-1">
                                <a href="#" className="hover:text-white transition-all duration-200">
                                    About Us
                                </a>
                            </li>
                            <li className="mt-1">
                                <a href="#" className="hover:text-white transition-all duration-200">
                                    Marketplace
                                </a>
                            </li>
                            <li className="mt-1">
                                <a href="#" className="hover:text-white transition-all duration-200">
                                    Community
                                </a>
                            </li>
                            <li className="mt-1">
                                <a href="#" className="hover:text-white transition-all duration-200">
                                    Resources
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="flex flex-col md:items-center gap-2">
                        <h2 className="font-bold text-xl">Contact</h2>
                        <ul className="text-gray-400">
                            <li className="mb-3 flex items-center gap-2">
                                <MailIcon className="w-6 text-green-400" />
                                <a href="mailto:help@cropsense.ai">help@cropsense.ai</a>
                            </li>
                            <li className="my-3 flex items-center gap-2">
                                <PhoneIcon className="w-6 text-green-400" />
                                <a href="">1800 100 100</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>© 2025 AgroTech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
