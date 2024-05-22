import React from "react";

const Homepage = () => {
    return (
        <div id="homepage"className="relative text-white max-md:pt-5 flex p-10 flex-col items-center justify-center min-h-[80vh] bg-[url('../public/background-mainpage.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute top-0 right-0 left-0 bottom-0 opacity-70 bg-black"></div>
            <p className="max-w-[900px] leading-8 text-lg mb-10 z-10 ">
                Welcome to{" "}
                <span className="text-xl font-bold">
                    AI Horizons
                </span>{" "}
                2024, the premier event for innovators, thinkers, and leaders in
                the field of artificial intelligence. This groundbreaking
                conference is dedicated to exploring the limitless potential of
                AI, its transformative impact on society, and the future it
                promises.
            </p>
            <p className="max-w-[900px] leading-8 text-lg  mb-10 z-10">
                Over the course of two days,{" "}
                <span className="text-xl font-bold  ">
                    AI Horizons
                </span>{" "}
                2024 will bring together a diverse array of speakers, from
                pioneering researchers to visionary entrepreneurs, to share
                their insights and experiences. Attendees will have the
                opportunity to engage in dynamic discussions, hands-on
                workshops, and networking sessions designed to foster
                collaboration and spark new ideas.
            </p>
            <button className="rounded-md px-5 py-2 text-2xl bg-sky-700 font-bold text-white uppercase z-10">
                Buy Ticket
            </button>
        </div>
    );
};

export default Homepage;
