import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Location = () => {
    const marker = [45.07838393257503, 7.850742581891066];

    return (
        <div
            id="location"
            className="p-10 md:flex gap-10 pb-10 mb-10"
        >
            <div className="md:w-[800px]">
                <MapContainer
                    center={{ lat: 45.07838393257503, lng: 7.850742581891066 }}
                    zoom={13}
                    scrollWheelZoom={true}
                    style={{ height: "60vh", width: "100%" , zIndex: "0" }}
                >
                    <TileLayer
                        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={marker}></Marker>
                </MapContainer>
            </div>
            <div className="mt-10 space-y-7">
                <h2 className="uppercase text-3xl text-sky-900">
                    Castello di Montaldo
                </h2>
                <div className="">
                    <div className="flex gap-2 items-center">
                        <FaLocationDot />
                        <p>Piazza Superga, 1</p>
                    </div>
                    <p className="ml-6">
                        {" "}
                        10020 Montaldo Torinese (Torino) - Italy
                    </p>
                </div>
                <div className="flex gap-2 items-center">
                    <FaPhone />
                    <p> +39 011 0620566</p>
                </div>
                <div className="flex gap-2 items-center">
                    <MdEmail />
                    <p>reservation@castellodimontaldo.it</p>
                </div>
                <button className="rounded-md px-5 py-2 text-lg bg-sky-700 font-bold text-white uppercase hover:bg-white hover:text-sky-700">
                    Reserve Room
                </button>
            </div>
        </div>
    );
};

export default Location;
