import StepCard from "./StepCard";

const Steps = ({ stepName, steps }) => {
  return (
    <div className="bg-[#3F57D6] h-full min-h-screen flex flex-col items-center lg:items-start lg:flex-row justify-evenly p-10 ">
      <div className="mt-5 lg:mt-28 flex flex-col items-center lg:items-start">
        <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-7xl md:w-[80vw] lg:w-[50vw] font-bricolage-grotesque">
          {stepName}
        </h1>
        <div className="flex flex-row justify-start mt-10">
          <button className="bg-[#f8f9fd] px-6 text-sm lg:px-3 py-2 lg:py-4 rounded-2xl mt-10 font-semibold text-[#0e4793] border-[#6074dc] border-4 border-opacity-85 font-bricolage-grotesque hover:scale-110 duration-500">
            Start for free today
          </button>
          <div className="flex flex-row justify-start">
            <img src="/arrow.svg" alt="arrow" />
            <p className="text-white font-cursive lg:w-44 lg:text-center rotate-6">
              See how SaaSDen Save over 100 + hours
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mx-2 mt-28">
        {steps.map((step, index) => (
          <StepCard text={step.text} img={step.img} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Steps;
