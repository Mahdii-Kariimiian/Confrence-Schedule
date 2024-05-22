import speakersInfo from "./speakersInfo";

const speakers = () => {
    console.log(speakersInfo);

    return (
        <div
            id="speakers"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  p-10"
        >
            {speakersInfo.map((speaker) => {
                return (
                    <div key={speaker.name} className="">
                        <div className="max-w-[200px] mb-3 w-[200px] h-[200px] overflow-hidden rounded-full border-2 border-black ">
                            <img src={speaker.Image} alt="" />
                        </div>
                        <h2 className="text-2xl">{speaker.name}</h2>
                        <h3 className="text-lg mb-3">{speaker.title}</h3>
                        <div>
                            <p className="text-sky-950 font-bold">
                                Experiences:
                            </p>
                            <p>{speaker.experience}</p>
                        </div>
                        <div>
                            <p className="text-sky-950 font-bold mt-3">
                                Education:{" "}
                            </p>
                            <p>{speaker.education}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default speakers;
