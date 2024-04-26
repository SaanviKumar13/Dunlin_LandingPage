import React from "react";
import { FaStar } from "react-icons/fa6";

function SevenSimple() {
  return (
    <>
      <div className="flex flex-col lg:flex-row bg-[#3F57D6] p-6 lg:p-14 gap-10 flex-shrink-0 text-white">
        <div className="w-full lg:w-1/2 p-2 lg:p-6 order-1 lg:order-none">
          <p className="text-blue-50 font-caveat font-bold text-2xl leading-10 tracking-tighter mb-3">
            Text
          </p>
          <h1 className="font-semibold text-3xl lg:text-5xl leading-72 tracking-tighter">
            Complete Your Month-
            <br />
            End Book Closing in <br />
            Seven Simple Steps
          </h1>
          <button className="items-center justify-center gap-4 bg-[#FFFFFF] text-[#3F57D6] font-bold lg:py-4 lg:px-8 px-4 py-2 my-8 border-4 border-solid border-gray-300 rounded-2xl">
            <span>Start for free today</span>
          </button>
        </div>
        <div className="w-full lg:w-1/2 p-6 lg:p-6 order-2 lg:order-none">
          <div className="flex-col items-center justify-center">
            <div className="flex items-center">
              <div className="flex -space-x-4 rtl:space-x-reverse">
                <img
                  className="w-12 h-12 border-2 border-white rounded-full dark:border-white"
                  src="/menico.png"
                  alt="icon2"
                />
                <img
                  className="w-12 h-12 border-2 border-white rounded-full dark:border-white"
                  src="/man2icon.png"
                  alt="icon1"
                />
                <img
                  className="w-12 h-12 border-2 border-white rounded-full dark:border-white"
                  src="/man3icon.png"
                  alt="icon2"
                />
              </div>
              <div className="flex flex-col ml-4">
                <p className="flex gap-1 items-center">
                  <FaStar className="text-yellow-500 text-sm" />
                  <FaStar className="text-yellow-500 text-sm" />
                  <FaStar className="text-yellow-500 text-sm" />
                  <FaStar className="text-yellow-500 text-sm" />
                  <FaStar className="text-yellow-500 text-sm" />
                </p>
                <p className="text-base font-normal text-white">
                  loved by 15,00+ people
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SevenSimple;
