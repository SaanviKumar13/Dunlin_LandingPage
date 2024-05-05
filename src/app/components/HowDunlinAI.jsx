const features = [
  "Cutting-Edge Security Standards",
  "Proprietary AI Solution",
  "Extensive Integrations",
  "Top-tier Workflows",
  "Trained on Thousands of Accounts",
  "In-House Hosted Model",
];

const HowDunlinAI = () => {
  return (
    <div className="bg-gradient-to-b from-[#e4f3e6] via-[#f2f6f8] to-[#f8f4fc] min-h-screen h-full p-10">
      <h1 className="font-bricolage-grotesque text-3xl md:text-5xl font-bold text-center flex flex-row items-center gap-3 md:gap-6 justify-center">
        Here's how{" "}
        <img
          src="/dunlinai.svg"
          alt="Dunlin AI"
          className="w-20 h-20 md:w-32 md:h-32 lg:w-44 lg:h-44"
        />
        do it
      </h1>
      <div className="flex flex-col items-center lg:flex-row md:flex-wrap gap-5 mt-5">
        {features.map((name, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl md:w-[60vw] lg:w-[30vw] h-[35vh] lg:h-[40vh] flex flex-col items-center justify-center p-5"
          >
            <div className="bg-[#e8ebf7] w-[70vw] md:w-[56vw] lg:w-[28vw] h-[30vh] rounded-t-3xl"></div>
            <h2 className="text-[#0A2850] p-4 font-semibold">{name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowDunlinAI;
