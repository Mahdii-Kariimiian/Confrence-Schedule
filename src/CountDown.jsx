import React, { useState, useEffect } from "react";

const CountDown = () => {
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const launchDate = "2024-07-07 8:00:00";

            const currentTime = new Date();
            const launchTime = new Date(launchDate);
            const differenceTime = launchTime - currentTime;

            setDay(Math.floor(differenceTime / (1000 * 60 * 60 * 24)));
            setHour(Math.floor((differenceTime / (1000 * 60 * 60)) % 24));
            setMinute(Math.floor((differenceTime / (1000 * 60)) % 60));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="bg-sky-950 text-white py-10 text-center flex-col gap-10 flex justify-center items-center text-3xl">
            <div className="space-y-2">
                <p className="text-xl">Event Starts on</p> 
                <p className="text-5xl">7 July 2024</p>
            </div>
            <div className="md:flex gap-[150px] text-5xl space-y-[50px] items-end justify-center">
                <div className="space-y-8  bg-sky-100 text-sky-950 p-3 w-[150px] rounded-md">
                    <p className="text-4xl">Day</p>
                    <p>{day}</p>
                </div>
                <div className="space-y-8 bg-sky-100 text-sky-950 p-3 w-[150px] rounded-md">
                    <p className="text-4xl">Hour</p>
                    <p>{hour}</p>
                </div>
                <div className="space-y-8  bg-sky-100 text-sky-950 p-3 w-[150px] rounded-md">
                    <p className="text-4xl">Minute</p>
                    <p>{minute}</p>
                </div>
            </div>
            <p>remains to the event.</p>
        </div>
    );
};

export default CountDown;
