import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

function Security() {
  return (
    <>
      <div className="flex flex-col bg-gray-100 p-6 lg:p-14 gap-8 flex-shrink-0">
        <p className="text-[#3F57D6] text-center font-bold text-2xl">
          Security our first priority
        </p>
        <div className="text-center font-semibold text-3xl lg:text-6xl  leading-72 tracking-tighter text-[#0A2850]">
          Our Commitment to Security and <br />
          Compliance
        </div>
        <div className="text-center text-[#4A5E6D] text-opacity-80 font-bricolage-grotesque text-base lg:text-lg leading-38.561 tracking-tighter">
          Learn More about Our SOC2, ISO27001, and GDPR Compliance, and Our
          State-of-the-Art
          <span className="hidden lg:inline">
            <br />
          </span>
          Security Standards and protocols.
        </div>

        <button className="flex items-center justify-center gap-4 bg-[#FFFFFF] text-[#3F57D6] font-bold lg:py-4 lg:px-8 px-4 py-2 mx-auto border-2 border-solid border-[#3F57D6] rounded-2xl mb-8">
          <span>Learn more</span>
        </button>

        <div className="flex mt-8 items-center justify-center space-x-4 gap-2">
          {/* Add your icon components here */}
          <span className="text-4xl text-gray-400">
            <Image
              src="/imagebrand.png"
              alt="Microsoft Logo"
              width={140}
              height={140}
            />
          </span>
          <span className="text-4xl text-gray-400">
            <Image
              src="/imagebrand2.png"
              alt="Microsoft Logo"
              width={200}
              height={200}
            />
          </span>
          <span className="text-4xl text-gray-400">
            <Image
              src="/imagebrand3.png"
              alt="Microsoft Logo"
              width={140}
              height={140}
            />
          </span>
        </div>


      </div>

      <div className="flex flex-col bg-white p-6 lg:p-14 gap-8 flex-shrink-0">
        <p className="text-[#3F57D6] text-center font-bold text-2xl">
          Blogs to help you
        </p>
        <div className="text-center font-semibold text-3xl lg:text-6xl  leading-72 tracking-tighter text-[#0A2850]">
          Unlock the Essentials
        </div>
        <div className="text-center text-[#4A5E6D] text-opacity-80 font-bricolage-grotesque text-base lg:text-lg leading-38.561 tracking-tighter">
          Strategic Resources for Modern Finance and Accounting Teams
        </div>

        <div className="flex flex-col justify-center sm:flex-row gap-3 w-full">
          <input
            type="text"
            placeholder="Enter your email"
            className="sm:w-60 h-12 p-3 text-gray-300 border border-solid border-gray-300 rounded-lg shadow"
          />
          <button
            type="submit"
            className="sm:w-40 h-12 text-white bg-[#3F57D6] rounded-lg shadow transition-all duration-300 ease-in-out hover:bg-[#3F57D6]">
            Subscribe
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 lg:mx-20 lg:mb-16 my-6 p-8 lg:p-0">
        <div className="max-w-sm  rounded-lg ">
          <a href="#">
            <img className="rounded-t-lg" src="/pmmodel.png" alt="" />
          </a>

          <div className="pt-5">
            <p className="mb-3 font-semibold text-[#6941C6]">
              Demi WIlkinson • 16 Jan 2022.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#101828]">
                  PM mental models
                </h5>
              </div>
              <div className="text-2xl font-extrabold">
                <FiArrowUpRight />
              </div>
            </div>

            <p className="mb-3 font-normal text-[#667085]">
              Mental models are simple expressions of complex processes of
              relationships.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-[#026AA2] bg-[#F0F9FF] rounded-lg">
                Product
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-[#3538CD] bg-[#EEF4FF] rounded-lg">
                Research
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-[#C4320A] bg-[#FFF6ED] rounded-lg">
                Frameworks
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm  rounded-lg ">
          <a href="#">
            <img className="rounded-t-lg" src="/pmmodel.png" alt="" />
          </a>

          <div className="pt-5">
            <p className="mb-3 font-semibold text-[#6941C6]">
              Demi WIlkinson • 16 Jan 2022.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#101828]">
                  PM mental models
                </h5>
              </div>
              <div className="text-2xl font-extrabold">
                <FiArrowUpRight />
              </div>
            </div>

            <p className="mb-3 font-normal text-[#667085]">
              Mental models are simple expressions of complex processes of
              relationships.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-[#026AA2] bg-[#F0F9FF] rounded-lg">
                Product
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-[#3538CD] bg-[#EEF4FF] rounded-lg">
                Research
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-[#C4320A] bg-[#FFF6ED] rounded-lg">
                Frameworks
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm  rounded-lg ">
          <a href="#">
            <img className="rounded-t-lg" src="/pmmodel.png" alt="" />
          </a>

          <div className="pt-5">
            <p className="mb-3 font-semibold text-[#6941C6]">
              Demi WIlkinson • 16 Jan 2022.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#101828]">
                  PM mental models
                </h5>
              </div>
              <div className="text-2xl font-extrabold">
                <FiArrowUpRight />
              </div>
            </div>

            <p className="mb-3 font-normal text-[#667085]">
              Mental models are simple expressions of complex processes of
              relationships.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-[#026AA2] bg-[#F0F9FF] rounded-lg">
                Product
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-[#3538CD] bg-[#EEF4FF] rounded-lg">
                Research
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-[#C4320A] bg-[#FFF6ED] rounded-lg">
                Frameworks
              </a>
            </div>
          </div>
        </div>
      </div>

      <button className="flex items-center justify-center gap-4 bg-[#FFFFFF] text-[#3F57D6] font-bold lg:py-4 lg:px-8 px-4 py-2 mx-auto border-2 border-solid border-[#3F57D6] rounded-2xl mb-8">
        <span>More Blogs</span>
      </button>
    </>
  );
}

export default Security;
