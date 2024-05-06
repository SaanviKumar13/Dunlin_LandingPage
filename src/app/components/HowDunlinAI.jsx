import CFOCard from "./case/CFOCard";

const firstArray = [
  "Cutting-Edge Security Standards",
  "Proprietary AI Solution",
  "Extensive Integrations",
];
const secondArray = [
  "Top-tier Workflows",
  "Trained on Thousands of Accounts",
  "In-House Hosted Model",
];

const HowDunlinAI = () => {
  return (
    <div className="bg-gradient-to-b from-[#e4f3e6] via-[#f2f6f8] to-[#f8f4fc] min-h-screen h-full py-10">
      <h1 className="font-bricolage-grotesque text-3xl md:text-5xl font-bold text-center flex flex-row items-center gap-3 md:gap-6 justify-center">
        Here's how{" "}
        <img
          src="/dunlinai.svg"
          alt="Dunlin AI"
          className="w-20 h-20 md:w-32 md:h-32 lg:w-44 lg:h-44"
        />
        do it
      </h1>
      <div className="flex flex-col items-center lg:flex-row md:flex-wrap w-[98vw] overflow-x-clip mt-5">
        <CFOCard items={firstArray} dir="rtl" />
        <CFOCard items={secondArray} dir={"ltr"} />
      </div>
    </div>
  );
};

export default HowDunlinAI;
