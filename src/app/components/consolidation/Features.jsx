import React from "react";

function Features() {
    return (
        <>
            <div className="flex items-center justify-center lg:p-24 p-10 gap-4 ">
                <p className="text-[#3F57D6] font-bricolage-grotesque font-bold lg:text-6xl text-2xl leading-[53.575px] tracking-[2.041px]">
                    Dunlin
                </p>
                <img
                    src="/ai.png"
                    className=" lg:w-auto lg:h-auto w-10 h-10"
                    alt="AI"
                />
                <p className="text-[#0A2850] font-bricolage-grotesque font-bold lg:text-6xl text-2xl leading-[53.575px] tracking-[2.041px]">
                    Features
                </p>
            </div>
            <div className="flex flex-col gap-10 h-auto lg:flex-row lg:p-5 p-0 lg:mx-10 mx-0">
                {/* div 1  */}
                <div className="order-1 md:px-16 flex flex-col text-left lg:text-left">
                    <p className="p-4 lg:p-4 text-[#3F57D6] font-bold lg:text-2xl text-md">
                        Text
                    </p>
                    <h1 className=" p-4 lg:p-4 text-2xl font-normal tracking-tight text-[#061B36] lg:text-4xl">
                        <label className="block">
                            Simplified Account{" "}
                            <span className="hidden lg:inline">
                                <br />
                            </span>{" "}
                            Consolidation
                        </label>{" "}
                    </h1>
                    <div className="flex flex-wrap justify-center items-center text-center p-4 sm:flex-row md:flex-col md:p-4 lg-flex lg:items-start lg:py-4">
                        <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
                            <img
                                src="/correctarro.svg"
                                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
                            />
                            <div className="font-normal text-left text-[#4A5E6D] text-lg">
                                Seamlessly Merge Accounts into the GL with Automatic Name Resolution
                            </div>
                        </div>
                        <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
                            <img
                                src="/correctarro.svg"
                                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
                            />
                            <div className="font-normal text-left text-[#4A5E6D] text-lg">
                                Easily Slice Data by Dates, Trailing Periods, Entities, and Geographies
                            </div>
                        </div>
                        <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
                            <img
                                src="/correctarro.svg"
                                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
                            />
                            <div className="font-normal text-left text-[#4A5E6D] text-lg">
                                Easily compare the performance metrics of various entities, pinpoint specific figures, and delve into intricate details.
                            </div>
                        </div>
                    </div>
                </div>
                {/* div 2 */}
                <div className="col-start-1 row-start-2 flex flex-col justify-center pb-0 sm:px-0 lg:col-start-2 lg:row-span-6 order-2 ">
                    <img
                        src="/rectandle.png"
                        alt="Landing image"
                        className="h-full w-full object-fit"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-10 h-auto lg:flex-row lg:p-5 p-0 lg:mx-24 mx-0">
                {/* div 1  */}
                <div className="lg:order-2 order-1 md:px-16 flex flex-col text-left lg:text-left">
                    <p className="p-4 lg:p-4 text-[#3F57D6] font-bold lg:text-2xl text-md">
                        Text
                    </p>
                    <h1 className=" p-4 lg:p-4 text-2xl font-normal tracking-tight text-[#061B36] lg:text-4xl">
                        <label className="block">
                          Offers 360 Degree Consolidation{" "}
                        </label>{" "}

                    </h1>
                    <div className="flex flex-wrap justify-center items-center text-center p-4 sm:flex-row md:flex-col md:p-4 lg-flex lg:items-start lg:py-4">
                        <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
                            <img
                                src="/correctarro.svg"
                                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
                            />
                            <div className="font-normal text-left text-[#4A5E6D] text-lg">
                                Consolidate Multiple Entities, Currencies, and Geographies
                            </div>
                        </div>
                        <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
                            <img
                                src="/correctarro.svg"
                                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
                            />
                            <div className="font-normal text-left text-[#4A5E6D] text-lg">
                                Gain a Comprehensive View of Financial Performance Across Diverse Operations
                            </div>
                        </div>
                        <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
                            <img
                                src="/correctarro.svg"
                                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
                            />
                            <div className="font-normal text-left text-[#4A5E6D] text-lg">
                                Generate Combined Consolidated Financial Statements for Comprehensive Financial Analysis
                            </div>
                        </div>
                    </div>
                </div>
                {/* div 2 */}
                <div className="col-start-1 row-start-2 flex flex-col justify-center pb-0 sm:px-0 lg:col-start-2 lg:row-span-6 lg:order-1  order-2">
                    <img
                        src="/rectandle.png"
                        alt="Landing image"
                        className="h-full w-full object-fit"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-10 h-auto lg:flex-row lg:p-5 p-0 lg:mx-10 mx-0 ">
                {/* div 1  */}
                <div className="order-1 md:px-16 flex flex-col text-left lg:text-left">
                    <p className="p-4 lg:p-4 text-[#3F57D6] font-bold lg:text-2xl text-md">
                        Text
                    </p>
                    <h1 className=" p-4 lg:p-4 text-2xl font-normal tracking-tight text-[#061B36] lg:text-4xl">
                        <label className="block">
                            Dunlin Offers Unified{" "}
                            <span className="hidden lg:inline">
                                <br />
                            </span>{" "}
                           Data import 
                        </label>{" "}
                    </h1>
                    <div className="flex flex-wrap justify-center items-center text-center p-4 sm:flex-row md:flex-col md:p-4 lg-flex lg:items-start lg:py-4">
                        <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
                            <img
                                src="/correctarro.svg"
                                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
                            />
                            <div className="font-normal text-left text-[#4A5E6D] text-lg">
                                Connect Business and Financial Systems like QuickBooks, <br/> Google Sheets, Stripe, Bill.com, and Over 20 Other Integrate
                            </div>
                        </div>
                        <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
                            <img
                                src="/correctarro.svg"
                                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
                            />
                            <div className="font-normal text-left text-[#4A5E6D] text-lg">
                                Import and Consolidate Data from Multiple Business and <br/> Financial Systems
                            </div>
                        </div>
                        <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
                            <img
                                src="/correctarro.svg"
                                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
                            />
                            <div className="font-normal text-left text-[#4A5E6D] text-lg">
                                Update Systems Directly from Ganister
                            </div>
                        </div>
                    </div>
                </div>
                {/* div 2 */}
                <div className="col-start-1 row-start-2 flex flex-col justify-center pb-0 sm:px-0 lg:col-start-2 lg:row-span-6 order-2 ">
                    <img
                        src="/rectandle.png"
                        alt="Landing image"
                        className="h-full w-full object-fit"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-10 h-auto lg:flex-row lg:p-5 p-0 lg:mx-24 mx-0">
                {/* div 1  */}
                <div className="lg:order-2 order-1 md:px-16 flex flex-col text-left lg:text-left">
                    <p className="p-4 lg:p-4 text-[#3F57D6] font-bold lg:text-2xl text-md">
                        Text
                    </p>
                    <h1 className=" p-4 lg:p-4 text-2xl font-normal tracking-tight text-[#061B36] lg:text-4xl">
                        <label className="block">
                            Holistic KPI Management {" "}
                            <span className="hidden lg:inline">
                                <br />
                            </span>{" "}
                            with dunlin.ai
                        </label>{" "}
                    </h1>
                    <div className="flex flex-wrap justify-center items-center text-center p-4 sm:flex-row md:flex-col md:p-4 lg-flex lg:items-start lg:py-4">
                        <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
                            <img
                                src="/correctarro.svg"
                                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
                            />
                            <div className="font-normal text-left text-[#4A5E6D] text-lg">
                                Monitor Budget vs Actuals and various standardized metrics <br /> updated every close.
                            </div>
                        </div>
                        <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
                            <img
                                src="/correctarro.svg"
                                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
                            />
                            <div className="font-normal text-left text-[#4A5E6D] text-lg">
                                Set and Monitor Both Internal and External KPIs and Metrics
                            </div>
                        </div>
                        <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
                            <img
                                src="/correctarro.svg"
                                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
                            />
                            <div className="font-normal text-left text-[#4A5E6D] text-lg">
                                Foster Department Leaders to Take Ownership of Their <br /> Financials
                            </div>
                        </div>
                        <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
                            <img
                                src="/correctarro.svg"
                                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
                            />
                            <div className="font-normal text-left text-[#4A5E6D] text-lg">
                                Gain Instant Insights into Business Performance and <br /> Financial Variances
                            </div>
                        </div>
                    </div>
                </div>
                {/* div 2 */}
                <div className="col-start-1 row-start-2 flex flex-col justify-center pb-0 sm:px-0 lg:col-start-2 lg:row-span-6 lg:order-1  order-2">
                    <img
                        src="/rectandle.png"
                        alt="Landing image"
                        className="h-full w-full object-fit"
                    />
                </div>
            </div>
        </>
    );
}

export default Features;
