const UseCaseCard = ({ name, desc }) => {
  return (
    <div className="bg-white rounded-3xl flex flex-row gap-5 p-10 lg:w-[60vw]">
      <div className="w-[40vw] h-[30vh] bg-[#fdf6ec] rounded-3xl"></div>
      <div className="flex flex-col justify-evenly">
        <h1 className="text-2xl lg:text-5xl font-bricolage">{name}</h1>
        <p className="text-sm md:text-lg">{desc}</p>
      </div>
    </div>
  );
};

export default UseCaseCard;
