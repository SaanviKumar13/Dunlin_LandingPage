// MovingImages.js
"use client"
import React, { useEffect, useState } from "react";

const Hows = ({ images, speed, dataOrder }) => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prevPosition) =>
                (prevPosition + 1) % (images.length + dataOrder.length / 2)
            );
        }, speed);

        return () => clearInterval(interval);
    }, [images.length, speed, dataOrder.length]);

    return (
        <div className="relative overflow-hidden h-64 mb-10">
            <div
                className="flex absolute top-0 transition-transform duration-500"
                style={{
                    transform: `translateX(-${position * (100 / dataOrder.length)}%)`,
                }}>
                {dataOrder.map((index) => (
                <div className=" border-amber-500 border-2">
                        <img
                            key={index}
                            src={images[index % images.length]}
                            className="h-64 w-auto rounded-lg mr-4"
                            alt={`Image ${index + 1}`}
                        />
                </div>    
                   
                ))}
            </div>
        </div>
    );
};

export default Hows;
