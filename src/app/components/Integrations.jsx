import React from "react";
import { FaStar } from "react-icons/fa6";

function Integrations() {
  return (
      <div className="flex flex-col lg:flex-row bg-[#E8EBF7;]  gap-10 flex-shrink-0 text-[#0A2850]">
              <div className="w-full lg:w-4/5 p-6 lg:p-14 order-1 lg:order-none">
                  <p className="text-[#3F57D6] font-caveat font-bold text-2xl leading-10 tracking-tighter mb-3">
                      Integrations
                  </p>
                  <h1 className="font-semibold text-5xl lg:text-7xl leading-72 tracking-tighter">
                  Connect your Systems in a few clicks
                  </h1>
              <div className=" text-[#4A5E6D] text-opacity-80 font-bricolage-grotesque text-base lg:text-xl leading-38.561 tracking-tighter">
                  Ganister has direct connectors for all your <br/> 
                  favourite tools
              </div>
              <button className="flex items-center justify-center gap-4 text-white bg-[#3F57D6] font-bold lg:py-4 lg:px-12 px-4 py-2 rounded-2xl my-4">
                  <span>Coming soon </span>
              </button>
          </div>
          
          <div className="w-full lg:w-1/2 order-2 lg:order-none">
              <img src="/imageplatform.png"/>
          </div>
      </div>
  )
}

export default Integrations;
