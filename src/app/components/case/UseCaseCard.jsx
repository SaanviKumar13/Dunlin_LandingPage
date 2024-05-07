const UseCaseCard = ({ name, desc }) => {
  return (
    <div className="bg-white rounded-3xl flex flex-row gap-5 p-10 w-[60vw]">
      <div className="w-[40vw] h-[30vh] bg-[#fdf6ec] rounded-3xl"></div>
      <div className="flex flex-col justify-evenly">
        <h1 className="text-6xl font-bricolage">{name}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default UseCaseCard;
