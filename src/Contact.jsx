import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-3xl font-bold text-center text-sky-800 mb-6">
                Contact Us
            </h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
                If you have any questions or need further information about AI
                Horizons 2024, please feel free to reach out to us. We're here
                to help!
            </p>
            <form className="space-y-4">
                <div>
                    <label
                        className="block text-gray-700 font-semibold mb-2"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div>
                    <label
                        className="block text-gray-700 font-semibold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div>
                    <label
                        className="block text-gray-700 font-semibold mb-2"
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        className="px-6 py-2 bg-sky-700 text-white font-semibold rounded-lg hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        type="submit"
                    >
                        Send Message
                    </button>
                </div>
            </form>
            <div className="mt-8 text-center">
                <p className="text-lg text-gray-700">Or you can reach us at:</p>
                <p className="text-lg text-sky-700 font-semibold">
                    Email: contact@aihorizons2024.com
                </p>
                <p className="text-lg text-sky-700 font-semibold">
                    Phone: +1 (123) 456-7890
                </p>
                <p className="text-lg text-gray-700 mt-4">
                    Follow us on social media for updates:
                </p>
                <div className="flex justify-center space-x-4 mt-2 text-2xl">
                    <a
                        href="https://twitter.com"
                        className="text-sky-700 hover:text-sky-800"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://facebook.com"
                        className="text-sky-700 hover:text-sky-800 text-2xl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://linkedin.com"
                        className="text-sky-700 hover:text-sky-800 text-2xl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
