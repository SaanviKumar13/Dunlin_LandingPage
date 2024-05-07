function Transform() {
  return (
    <div className="flex flex-col bg-[#3F57D6] p-6 lg:p-14 gap-8 flex-shrink-0 text-white">
      <div className="text-center font-semibold text-3xl lg:text-6xl  leading-72 tracking-tighter">
        Transform your accounting practice today!
      </div>
      <div className="text-center text-white text-opacity-80 font-bricolage-grotesque text-base lg:text-xl leading-38.561 tracking-tighter">
        Unlock Smooth Financial Operations with Dunlin Unified
        <span className="hidden lg:inline">
          <br />
        </span>
        Finance and Accounting Software for QuickBooks Online
      </div>

      <button className="flex items-center justify-center gap-4 bg-[#FFFFFF] text-[#3F57D6] font-bold lg:py-2 lg:px-6 px-4 py-2 mx-auto border-4 border-solid border-gray-300 rounded-2xl">
        <span>Talk to a human</span>
        <div className="flex -space-x-4 rtl:space-x-reverse">
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-white"
            src="/avat-girl-btn.svg"
            alt="icon1"
          />
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-white"
            src="/avatar-button.svg"
            alt="icon2"
          />
        </div>
      </button>
    </div>
  );
}

export default Transform;
