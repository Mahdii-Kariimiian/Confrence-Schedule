import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-sky-950 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">
                            Contact Information
                        </h3>
                        <p>123 AI Conference St.Tech City, TX 75000</p>
                        <p>
                            Email:{" "}
                            <a
                                href="mailto:info@aihorizons2024.com"
                                className="text-blue-400"
                            >
                                info@aihorizons2024.com
                            </a>
                        </p>
                        <p>Phone: (123) 456-7890</p>
                        <div className="mt-4">
                            <a href="#" className="text-blue-400 mr-2">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-blue-400 mr-2">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-blue-400 mr-2">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="text-blue-400">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">
                            Quick Links
                        </h3>
                        <ul>
                            <li>
                                <a
                                    href="#"
                                    className="text-blue-400 hover:underline"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="text-blue-400 hover:underline"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#speakers"
                                    className="text-blue-400 hover:underline"
                                >
                                    Speakers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#schedule"
                                    className="text-blue-400 hover:underline"
                                >
                                    Schedule
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/faq"
                                    className="text-blue-400 hover:underline"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="text-blue-400 hover:underline"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 px-4">
                        <h3 className="text-lg font-semibold mb-2">
                            Newsletter Signup
                        </h3>
                        <form action="#" method="POST">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email address"
                                className="w-full p-2 mb-2 text-gray-800"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 p-2 text-white"
                            >
                                Subscribe
                            </button>
                        </form>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold mb-2">
                                Sponsors and Partners
                            </h3>
                            <div className="flex space-x-4">
                                <img
                                    src="./Chat-gpt logo.png"
                                    alt="Chat-gpt"
                                    className="h-10"
                                />
                                <img
                                    src="Google logo.png"
                                    alt="Google"
                                    className="h-10"
                                />
                                <img
                                    src="IBM logo.png"
                                    alt="IBM"
                                    className="h-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2024 AI Horizons. All rights reserved.</p>
                    <ul className="mt-2">
                        <li>
                            <a
                                href="/privacy-policy"
                                className="text-blue-400 hover:underline"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="/terms-conditions"
                                className="text-blue-400 hover:underline"
                            >
                                Terms and Conditions
                            </a>
                        </li>
                        <li>
                            <a
                                href="/cookie-policy"
                                className="text-blue-400 hover:underline"
                            >
                                Cookie Policy
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
