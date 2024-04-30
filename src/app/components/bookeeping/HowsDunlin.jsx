import React from "react";
import { FaStar } from "react-icons/fa6";
import Hows from "../../common/Hows";

function TemplateFactory() {
    const images = [
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
        "https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034_1280.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
        "https://cdn.pixabay.com/photo/2017/02/27/21/47/yogurt-2104327_1280.jpg",
    ];

    return (
        <>
            <div className="flex-col lg:flex-row bg-gray-100 p-6 lg:p-14 gap-10 flex-shrink-0">
                <div className="w-full lg:w-3/4 p-2 lg:p-6 order-1 lg:order-none text-[#0A2850]">
                    <p className="font-caveat font-bold text-2xl leading-10 tracking-tighter mb-3 text-[#0A2850]">
                        Template Factory
                    </p>
                    <h1 className="font-bold text-5xl lg:text-7xl leading-72 tracking-tighter">
                        Discover Free <br /> Templates and <br /> workflows,
                        <span className="bg-[#7E8DE0] text-white"> Save time ! </span>
                    </h1>
                </div>

                <div className="w-full flex flex-col justify-center flex-shrink-0 font-normal text-[#4A5E6D] text-xl leading-31.537 tracking--0.117 p-3 lg:w-1/2 lg:p-6 order-2 lg:order-none">
                    <p>
                        Access pre-built dashboards, KPI Trackers and workflows <br />{" "}
                        instantly. Say goodbye to tedious manual report and <br /> dashboard
                        creation.
                    </p>
                </div>

                <button className="flex items-center justify-center gap-4 text-white bg-[#3F57D6] font-bold lg:py-4 lg:px-12 px-4 py-2 rounded-2xl mx-3 lg:mx-5">
                    <span>Coming soon </span>
                </button>
            </div>
            <div className="py-16">
                <Hows
                    images={images}
                    speed={2000}
                    dataOrder={[...Array(images.length).keys()]}
                    className="mb-5"
                />
                <Hows
                    images={images}
                    speed={4000}
                    dataOrder={[...Array(images.length).keys()].reverse()}
                    className="mt-5"
                />
            </div>
        </>
    );
}

export default TemplateFactory;
