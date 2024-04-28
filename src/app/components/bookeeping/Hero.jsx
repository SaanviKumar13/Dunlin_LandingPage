import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

function Hero() {
    return (
        <div className="hero-container relative bg-white" >

            <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundImage: "url('/ellipse.png')" }}>
                <div className="navbar flex justify-between items-center w-3/4 p-8">
                    <div className="flex items-center justify-center gap-2 ">
                        <p className="text-white font-bricolage-grotesque font-bold lg:text-2xl text-xl leading-[53.575px] tracking-[2.041px]">
                            Dunlin
                        </p>
                        <img
                            src="/ai.png"
                            className=" lg:w-10 lg:h-10 w-10 h-10"
                            alt="AI"
                        />
                    </div>
                    {/* <div className="flex space-x-6 items-center justify-center">
                        <a href="#" className="text-gray-300 hover:text-gray-300 text-sm ">Product</a>
                        <a href="#" className="text-gray-300 hover:text-gray-300 text-sm ">Usecase</a>
                        <a href="#" className="text-gray-300 hover:text-gray-300 text-sm ">Integration</a>
                        <a href="#" className="text-gray-300 hover:text-gray-300 text-sm ">Templates</a>
                        <a href="#" className="text-gray-300 hover:text-gray-300 text-sm ">Workflows</a>
                        <a href="#" className="text-gray-300 hover:text-gray-300 text-sm ">Resources</a>
                        <a href="#" className="text-gray-300 hover:text-gray-300 text-sm ">Pricing</a>
                        <button className="flex items-center justify-center gap-4 bg-[#FFFFFF] text-[#3F57D6] font-bold rounded-full px-8 py-2">
                            <span>Book Demo</span>
                        </button>
                    </div> */}

                </div>
                <div className="text-center space-y-6 my-10 px-4">
                    <p className=" text-start font-Bricolage-Grotesque text-lg font-normal text-white opacity-80 leading-normal md:leading-[38.561px] tracking-tighter md:tracking-normal">Month end close made easy</p>
                    <p className="my-10 text-start font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[82.263px] tracking-tighter text-gray-200">
                        Your Months-End Close <br /> Shouldn't Take Half a Month
                    </p>
                    <div className=" text-start font-Bricolage-Grotesque lg:text-2xl text-xl font-normal text-white opacity-80 leading-normal md:leading-[38.561px] tracking-tighter md:tracking-normal py-6">Close books in hours, not weeks. Categorize transactions without <br/> hassle. Adjust entries with precision. Reconcile accounts effortlessly </div>
                    <div className="flex lg:gap-12 gap-4">
                        <button className="flex items-start justify-center gap-4 bg-[#FFFFFF] text-[#3F57D6] font-bold  lg:py-4 lg:px-12 px-2 py-2 border-4 border-solid border-gray-300 rounded-2xl">
                            <span>Book a call</span>
                        </button>
                        <div className="flex-col items-center justify-center">
                            <div className="flex items-center">
                                <div className="flex -space-x-4 rtl:space-x-reverse mt-2">
                                    <img
                                        className="lg:w-12 lg:h-12 w-10 h-10 border-2 border-white rounded-full dark:border-white"
                                        src="/menico.png"
                                        alt="icon2"
                                    />
                                    <img
                                        className="lg:w-12 lg:h-12 w-10 h-10 border-2 border-white rounded-full dark:border-white"
                                        src="/man2icon.png"
                                        alt="icon1"
                                    />
                                    <img
                                        className="lg:w-12 lg:h-12 w-10 h-10 border-2 border-white rounded-full dark:border-white"
                                        src="/man3icon.png"
                                        alt="icon2"
                                    />
                                </div>
                                <div className="flex flex-col ml-4">
                                    <p className="flex gap-1 lg:items-center items-start ">
                                        <FaStar className="text-yellow-500 text-sm" />
                                        <FaStar className="text-yellow-500 text-sm" />
                                        <FaStar className="text-yellow-500 text-sm" />
                                        <FaStar className="text-yellow-500 text-sm" />
                                        <FaStar className="text-yellow-500 text-sm" />
                                    </p>
                                    <p className="lg:text-base  text-xs font-normal text-white">
                                        loved by 15,00+ people
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className="text-start">
                            <p className="text-gray-400 font-medium text-base tracking-wider leading-7">💙 OUR PRODUCT USED BY THESE COMPANIES 💙</p>
                            <div className="flex mt-8 space-x-4 gap-2 w-full">

                                <span className="text-4xl text-gray-400">
                                    <Image
                                        src="/1.svg"
                                        alt="Microsoft Logo"
                                        width={200}
                                        height={200}
                                    />
                                </span>
                                <span className="text-4xl text-gray-400">
                                    <Image
                                        src="/2.svg"
                                        alt="Microsoft Logo"
                                        width={200}
                                        height={200}
                                    />
                                </span>
                                <span className="text-4xl text-gray-400">
                                    <Image
                                        src="/3.svg"
                                        alt="Microsoft Logo"
                                        width={200}
                                        height={200}
                                    />
                                </span>
                                <span className="text-4xl text-gray-400">
                                    <Image
                                        src="/4.svg"
                                        alt="Microsoft Logo"
                                        width={200}
                                        height={200}
                                    />
                                </span>
                                <span className="text-4xl text-gray-400">
                                    <Image
                                        src="/5.svg"
                                        alt="Microsoft Logo"
                                        width={200}
                                        height={200}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                   
                </div>

               
            </div>
            {/* <div className="absolute inset-x-0 bottom-0 flex items-center justify-center pt-50">
                <iframe width="860" height="560" src="https://www.youtube.com/embed/73_1biulkYk?si=T_DxKdkC_zG5xEMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            
            </div> */}
        </div>

    );
}

export default Hero;
