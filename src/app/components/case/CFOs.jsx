"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

const CFOCard = dynamic(() => import("./CFOCard"));
export default function CFOs({ name, firstArray, secondArray }) {
  return (
    <div className="p-4 py-12 flex flex-col items-center overflow-x-hidden">
      <div className="text-center font-bricolage font-semibold inline-flex items-center text-lg lg:text-4xl text-[#0A2850]">
        <span className="mr-[-.75rem] lg:mr-4">Why</span>
        <span>
          <Image
            src="/dunlinAI.svg"
            alt="DunlinAI"
            width={189.51}
            height={67.82}
            className=" -rotate-12 scale-75 shadow-[0_4px_42.9px_0_rgba(0,0,0,0.1)] lg:scale-100"
          />
        </span>
        <span className="ml-[-1rem] lg:ml-4 lg:mr-4">is loved</span>
        <span>
          <Image
            src="/heart.svg"
            alt="heart"
            width={60}
            height={60}
            className="scale-75 lg:scale-100 lg:mr-4"
          />
        </span>
        by {name}
      </div>
      <CFOCard items={firstArray} dir="rtl" />
      <CFOCard items={secondArray} dir={"ltr"} />
    </div>
  );
}
