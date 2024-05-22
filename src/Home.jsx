import React from "react";
import Homepage from "./Homepage";
import Location from "./Location";
import Speakers from "./Speakers";
import Timeline from "./Timeline";
import CountDown from "./CountDown";

const Home = () => {
    return (
        <div>
            <Homepage />
            <CountDown />
            <div className="flex flex-col justify-center items-center">
                <h2 className="my-10 mb-0 text-3xl text-sky-900">
                    Speakers at the event
                </h2>
                <Speakers />
            </div>
            <Timeline />
            <Location />
        </div>
    );
};

export default Home;
