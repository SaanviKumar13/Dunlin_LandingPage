import React from "react";
import Image from "next/image";

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
                    <div className="flex space-x-6 items-center justify-center">
                        <a href="/product" className="text-gray-300 hover:text-gray-300 text-sm ">Product</a>
                        <a href="#" className="text-gray-300 hover:text-gray-300 text-sm ">Usecase</a>
                        <a href="#" className="text-gray-300 hover:text-gray-300 text-sm ">Integration</a>
                        <a href="#" className="text-gray-300 hover:text-gray-300 text-sm ">Templates</a>
                        <a href="#" className="text-gray-300 hover:text-gray-300 text-sm ">Workflows</a>
                        <a href="#" className="text-gray-300 hover:text-gray-300 text-sm ">Resources</a>
                        <a href="#" className="text-gray-300 hover:text-gray-300 text-sm ">Pricing</a>
                        <button className="flex items-center justify-center gap-4 bg-[#FFFFFF] text-[#3F57D6] font-bold rounded-full px-8 py-2">
                            <span>Book Demo</span>
                        </button>
                    </div>
                    
                </div>
                <div className="text-center space-y-6 my-10">
                    <p className=" text-center font-Bricolage-Grotesque text-lg font-normal text-white opacity-80 leading-normal md:leading-[38.561px] tracking-tighter md:tracking-normal ">Month end close made easy</p>
                    <p className="my-10 text-center font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[82.263px] tracking-tighter text-gray-200">
                        Close Faster, Consolidate <br /> Smarter, Report Stronger
                    </p>
                    <div className=" text-center font-Bricolage-Grotesque text-2xl font-normal text-white opacity-80 leading-normal md:leading-[38.561px] tracking-tighter md:tracking-normal py-6">Unlock Smooth Financial Operations with Ganister's Unified <br/> Finance and Accounting Software for QuickBooks Online</div>
                    <button className="flex items-center justify-center gap-4 bg-[#FFFFFF] text-[#3F57D6] font-bold lg:py-4 lg:px-6 px-4 py-2 mx-auto border-4 border-solid border-gray-300 rounded-2xl">
                        <span>Start for Free today </span>
                    </button>
                </div>

                <div className="p-10">
                    <div className="text-center">
                        <p className="text-gray-400 font-medium text-base tracking-wider leading-7">💙 TRUSTED BY THESE INNOVATIVE COMPANIES 💙</p>
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
            {/* <div className="absolute inset-x-0 bottom-0 flex items-center justify-center pt-50">
                <iframe width="860" height="560" src="https://www.youtube.com/embed/73_1biulkYk?si=T_DxKdkC_zG5xEMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            
            </div> */}
        </div>
       
    );
}

export default Hero;
