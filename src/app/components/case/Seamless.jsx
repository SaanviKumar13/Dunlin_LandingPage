import Image from "next/image";
import SeamlessCard from "./SeamlessCard";
export default function Seamless() {
  return (
    <>
      <div className=" h-screen w-screen p-4 py-12 flex flex-col items-center overflow-x-hidden overflow-y-scroll">
        <div className="mt-8 font-bricolage font-semibold text-lg lg:text-[2.75rem] text-[#0A2850]">
          <div>
            <span className=" bg-[#7E8DE0] text-white px-3 py-2 text-center mr-1">
              Seamless Integration
            </span>
            Into Your Existing Workflows.
          </div>
          <div className="lg:mt-6 inline-flex items-center"> 
            Prioritize Your Processes with
            <span>
              <Image
                src="/dunlinAI.svg"
                alt="DunlinAI"
                width={189.51}
                height={67.82}
                className=" -rotate-6 scale-75 shadow-[0_4px_42.9px_0_rgba(0,0,0,0.1)] lg:scale-100 lg:ml-6"
              />
            </span>
          </div>
        </div>
            <SeamlessCard />
      </div>
    </>
  );
}
