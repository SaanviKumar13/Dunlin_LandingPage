const StepCard = ({ img, text }) => {
  return (
    <div className="bg-[#19181b] rounded-2xl h-full md:w-[60vw] lg:w-[30vw] flex flex-col items-center justify-center ">
      <div className="bg-[#2a292f] w-[70vw] md:w-[40vw] lg:w-[15vw] h-8 rounded-b-3xl"></div>
      <div className="bg-[#e8ebf7] h-[40vh] w-[70vw] md:w-[58vw] lg:w-[28vw] rounded-t-3xl mt-2">
        {/* <img src={img} alt={img} /> */}
      </div>
      <p className="bg-[#2a292f] rounded-b-3xl md:w-[58vw] lg:w-[28vw] p-5 mt-3 m-4 text-center text-white font-bricolage-grotesque font-bold text-lg md:text-2xl">
        {text}
      </p>
    </div>
  );
};

export default StepCard;
