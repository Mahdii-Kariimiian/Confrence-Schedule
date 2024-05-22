import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);
    console.log(isHamburgerMenu);
    const handleClick = () => {
        setIsHamburgerMenu(!isHamburgerMenu);
    };

    return (
        <header className="relative z-20 flex gap-5 border-b-2 bg-white shadow-md shadow-sky-100 items-center justify-between px-10 py-5">
            <Link to='/'>
                <h2 className="text-3xl whitespace-nowrap text-sky-950">
                    AI HORIZON
                </h2>
            </Link>
            <ul className="flex gap-2 max-md:hidden">
                <li className="nav-links">
                    <a href="/#location">Location</a>
                </li>
                <li className="nav-links">
                    <a href="/#speakers">Speakers</a>
                </li>
                <li className="nav-links">
                    <a href="/#schedule">Schedule</a>
                </li>
                <Link to="contact">
                    <li className="nav-links">Contact us</li>
                </Link>
                <Link to="about">
                    {" "}
                    <li className="nav-links">About us</li>
                </Link>
                <li className="cursor-pointer px-3 py-1 rounded-md whitespace-nowrap bg-sky-700 text-white font-bold uppercase hover:bg-white hover:text-sky-700">
                    Buy Ticket
                </li>
            </ul>

            <div
                onClick={handleClick}
                className="md:hidden cursor-pointer text-3xl text-sky-950"
            >
                <GiHamburgerMenu />
            </div>
            <div
                onClick={handleClick}
                className={`${
                    !isHamburgerMenu
                        ? "hidden space-y-5"
                        : "absolute bg-white top-0 left-[30%] h-[100vh] right-0 md:hidden min-w-[200px] z-10"
                } `}
            >
                <ul className="p-5 text-center space-y-5 mt-10 max-w-[200px] m-auto">
                    <li className="nav-links">Location</li>
                    <li className="nav-links">
                        <a href="#speakers">Speakers</a>
                    </li>
                    <li className="nav-links">
                        <a href="#schedule">schedule</a>
                    </li>
                    <li className="nav-links">Contact us</li>
                    <li className="nav-links">About us</li>
                    <li className="cursor-pointer px-3 py-1 rounded-md whitespace-nowrap bg-sky-700 text-white font-bold uppercase hover:bg-white hover:text-sky-700">
                        Buy Ticket
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Nav;
