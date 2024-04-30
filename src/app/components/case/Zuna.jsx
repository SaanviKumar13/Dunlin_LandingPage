import Image from "next/image";

export default function Zuna() {
  return (
    <>
      <div className=" relative h-screen w-screen flex justify-center items-center p-8">
        <Image
          src="/zuna.png"
          alt="_"
          layout="fill"
          objectFit="cover"
          draggable={false}
          className=" -z-10"
        />
        <div className=" flex justify-between items-center flex-col lg:flex-row">
          <div className=" flex flex-col items-center lg:items-start ">
            <div className="flex gap-4 lg:mb-6 ml-[-2rem] lg:ml-0 scale-50 lg:scale-100">
              <Image src="/zunaLogo.svg" alt="ZUNA" width={251} height={62} />
              <Image
                src="/handshake.png"
                alt="partner"
                width={82}
                height={45.61}
                className=" scale-y-[.8]"
              />
              <Image
                src="/dunlinAI.svg"
                alt="DunlinAI"
                width={189.51}
                height={67.82}
              />
            </div>
            <div className=" text-3xl lg:text-6xl font-semibold font-bricolage lg:leading-[64px] text-center lg:text-left text-[#0A2850]">
              Zuna Remarkable Journey: <br /> Cutting close time from <br />{" "}
              <div className=" mt-1 lg:mt-3">
                <span className="bg-[#7E8DE0] text-white px-2 text-center mt-8 py-1">
                  {" "}
                  4 days to 2 hours !
                </span>
              </div>{" "}
            </div>
          </div>
          <div className="relative">
            <Image
              src="/caseStudy.png"
              alt="CaseStudy"
              objectFit="cover"
              draggable={false} 
              height={460}
              width={407}
              className=" scale-75"
              />
              <button className=" absolute left-0 bottom-0 translate-x-[55%] translate-y-[-100%] flex items-center justify-center text-white bg-[#3F57D6] font-bold py-4 text-center px-8 rounded-2xl my-4">
                  <span> View Case Study </span>
              </button>
          </div>
        </div>
      </div>
    </>
  );
}
