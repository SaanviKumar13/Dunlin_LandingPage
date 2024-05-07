import React from "react";
import { FaStar } from "react-icons/fa6";
import UseCaseCard from "./UseCaseCard";
const useCases = [
  {
    name: "Strategic Decision",
    desc: "Ganister offers a holistic view of KPIs, empowering confident strategic decisions with comprehensive insights, including budgets vs actuals and departmental metrics.",
  },
  {
    name: "Data-Driven Insights",
    desc: "Ganister's reporting suite drives informed decision-making for CFOs with consolidated financial insights.",
  },
  {
    name: "Time and Resource Optimization",
    desc: "Ganister automates book closures, freeing teams for strategic planning",
  },
  {
    name: "Agility and Responsiveness",
    desc: "Ganister enables CFOs to swiftly adapt with on-demand reports, ensuring agility in dynamic markets",
  },
  {
    name: "Centralized Financial System",
    desc: "Ganister streamlines access to vital financial information for CFOs, enhancing efficiency with a consolidated reporting system",
  },
  {
    name: "Efficiency Amplification and Operational Oversight",
    desc: "Ganister streamlines access to vital financial information for CFOs, enhancing efficiency with a consolidated reporting system",
  },
];

function Hero() {
  return (
    <div className="hero-container relative">
      <div
        className="flex flex-col items-center justify-center min-h-screen pb-10"
        style={{ backgroundImage: "url('/ellipse.png')" }}
      >
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
            <a
              href="/product"
              className="text-gray-300 hover:text-gray-300 text-sm "
            >
              Product
            </a>
            <a
              href="/reporting"
              className="text-gray-300 hover:text-gray-300 text-sm "
            >
              Reporting
            </a>
            <a
              href="/consolidation"
              className="text-gray-300 hover:text-gray-300 text-sm "
            >
              Consolidation
            </a>
            <a
              href="/case"
              className="text-gray-300 hover:text-gray-300 text-sm "
            >
              Use Case
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-300 text-sm ">
              Workflows
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-300 text-sm ">
              Resources
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-300 text-sm ">
              Pricing
            </a>
            <button className="flex items-center justify-center gap-4 bg-[#FFFFFF] text-[#3F57D6] font-bold rounded-full px-8 py-2">
              <span>Book Demo</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start my-10 p-10">
          <img src="/usecases.svg" alt="use case" className="w-36 h-14" />
          <p className="my-10 font-extrabold text-3xl md:text-5xl lg:text-7xl leading-[82.263px] tracking-tighter text-gray-200">
            Is Strategic Finance Losing Priority to Month-End Accounting Crunch?
          </p>
          <div className="w-[60vw] font-bricolage text-2xl font-normal text-white opacity-80 leading-normal md:leading-[38.561px] tracking-tighter md:tracking-normal py-6">
            Ganister enables CFOs to prioritize Strategic Finance by automating
            book closures, while also offering instant reporting features to
            uncover and communicate insights to stakeholders in a format that
            captivates.
          </div>
          <div className="flex flex-row gap-2 items-center">
            <button className="bg-[#FFFFFF] text-[#3F57D6] font-bold lg:py-4 lg:px-6 px-4 py-2 mx-auto border-4 border-solid border-gray-300 rounded-2xl">
              <span>View Case Study </span>
            </button>
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
      </div>
      <div className="flex flex-row gap-5 p-10 overflow-y-scroll no-scrollbar bg-[#0c4797]">
        {useCases.map((useCase, index) => (
          <UseCaseCard key={index} {...useCase} />
        ))}
      </div>
      {/* <div className="absolute inset-x-0 bottom-0 flex items-center justify-center pt-50">
                <iframe width="860" height="560" src="https://www.youtube.com/embed/73_1biulkYk?si=T_DxKdkC_zG5xEMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            
            </div> */}
    </div>
  );
}

export default Hero;
