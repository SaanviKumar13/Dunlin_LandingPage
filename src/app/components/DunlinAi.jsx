import React from "react";

function DunlinAi() {
  return (
    <>
      <div className="flex items-center justify-center lg:p-24 p-10 ">
        <p className="text-[#3F57D6] font-bricolage-grotesque font-bold lg:text-6xl text-2xl leading-[53.575px] tracking-[2.041px]">
          Dunlin
        </p>
        <img
          src="/ai.png"
          className=" lg:w-auto lg:h-auto w-10 h-10"
          alt="AI"
        />
        <p className="text-[#0A2850] font-bricolage-grotesque font-bold lg:text-6xl text-2xl leading-[53.575px] tracking-[2.041px]">
          Benefits
        </p>
      </div>
      <div className="flex flex-col gap-10 h-auto lg:flex-row lg:p-5 p-0 lg:mx-10 mx-0">
        {/* div 1  */}
        <div className="order-1 md:px-16 flex flex-col text-left lg:text-left">
          <p className="p-4 lg:p-4 text-[#3F57D6] font-bold lg:text-2xl text-md">
            Close Books
          </p>
          <h1 className=" p-4 lg:p-4 text-2xl font-normal tracking-tight text-[#061B36] lg:text-4xl">
            <label className="block">
              Unlock your bandwidth as we swiftly{" "}
              <span className="hidden lg:inline">
                <br />
              </span>{" "}
              and accurately close your books.
            </label>{" "}
          </h1>
          <div className="flex flex-wrap justify-center items-center text-center p-4 sm:flex-row md:flex-col md:p-4 lg-flex lg:items-start lg:py-4">
            <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
              <img
                src="/correctarro.svg"
                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
              />
              <div className="font-normal text-left text-[#4A5E6D] text-lg">
                Instantly Auto-Categorize Transactions and Adjust Entries
              </div>
            </div>
            <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
              <img
                src="/correctarro.svg"
                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
              />
              <div className="font-normal text-left text-[#4A5E6D] text-lg">
                Achieve Transaction Reconciliation with Bills, Invoices, <br />{" "}
                and Receipts in Seconds
              </div>
            </div>
            <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
              <img
                src="/correctarro.svg"
                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
              />
              <div className="font-normal text-left text-[#4A5E6D] text-lg">
                Generate Financial Statements Minutes After Closing <br />
                (Including Balance Sheet, Income Statement, and P&L)
              </div>
            </div>
          </div>
          <div className="px-4 md:mx-10 lg:mx-0 lg:w-3/4 lg:grid-cols-3 lg:justify-items-start">
            <div className="mx-auto flex flex-col md:flex-row gap-2 ">
              <a
                href=""
                className="flex h-12 w-full md:w-52 items-center justify-center rounded-md font-bold text-home-bg transition-colors duration-300 ease-in-out border-2 bg-[#3F57D6] text-white">
                Sign up for free
              </a>
            </div>
          </div>
        </div>
        {/* div 2 */}
        <div className="col-start-1 row-start-2 flex flex-col justify-center pb-0 sm:px-0 lg:col-start-2 lg:row-span-6 order-2 ">
          <img
            src="/rectandle.png"
            alt="Landing image"
            className="h-full w-full object-fit"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 h-auto lg:flex-row lg:p-5 p-0 lg:mx-24 mx-0">
        {/* div 1  */}
        <div className="lg:order-2 order-1 md:px-16 flex flex-col text-left lg:text-left">
          <p className="p-4 lg:p-4 text-[#3F57D6] font-bold lg:text-2xl text-md">
            Close Books
          </p>
          <h1 className=" p-4 lg:p-4 text-2xl font-normal tracking-tight text-[#061B36] lg:text-4xl">
            <label className="block">
              Unlock your bandwidth as we swiftly{" "}
              <span className="hidden lg:inline">
                <br />
              </span>{" "}
              and accurately close your books.
            </label>{" "}
          </h1>
          <div className="flex flex-wrap justify-center items-center text-center p-4 sm:flex-row md:flex-col md:p-4 lg-flex lg:items-start lg:py-4">
            <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
              <img
                src="/correctarro.svg"
                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
              />
              <div className="font-normal text-left text-[#4A5E6D] text-lg">
                Instantly Auto-Categorize Transactions and Adjust Entries
              </div>
            </div>
            <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
              <img
                src="/correctarro.svg"
                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
              />
              <div className="font-normal text-left text-[#4A5E6D] text-lg">
                Achieve Transaction Reconciliation with Bills, Invoices, <br />{" "}
                and Receipts in Seconds
              </div>
            </div>
            <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
              <img
                src="/correctarro.svg"
                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
              />
              <div className="font-normal text-left text-[#4A5E6D] text-lg">
                Generate Financial Statements Minutes After Closing <br />
                (Including Balance Sheet, Income Statement, and P&L)
              </div>
            </div>
          </div>
          <div className="px-4 md:mx-10 lg:mx-0 lg:w-3/4 lg:grid-cols-3 lg:justify-items-start">
            <div className="mx-auto flex flex-col md:flex-row gap-2 ">
              <a
                href=""
                className="flex h-12 w-full md:w-52 items-center justify-center rounded-md font-bold text-home-bg transition-colors duration-300 ease-in-out border-2 bg-[#3F57D6] text-white">
                Sign up for free
              </a>
            </div>
          </div>
        </div>
        {/* div 2 */}
        <div className="col-start-1 row-start-2 flex flex-col justify-center pb-0 sm:px-0 lg:col-start-2 lg:row-span-6 lg:order-1  order-2">
          <img
            src="/rectandle.png"
            alt="Landing image"
            className="h-full w-full object-fit"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 h-auto lg:flex-row lg:p-5 p-0 lg:mx-10 mx-0 ">
        {/* div 1  */}
        <div className="order-1 md:px-16 flex flex-col text-left lg:text-left">
          <p className="p-4 lg:p-4 text-[#3F57D6] font-bold lg:text-2xl text-md">
            Close Books
          </p>
          <h1 className=" p-4 lg:p-4 text-2xl font-normal tracking-tight text-[#061B36] lg:text-4xl">
            <label className="block">
              Unlock your bandwidth as we swiftly{" "}
              <span className="hidden lg:inline">
                <br />
              </span>{" "}
              and accurately close your books.
            </label>{" "}
          </h1>
          <div className="flex flex-wrap justify-center items-center text-center p-4 sm:flex-row md:flex-col md:p-4 lg-flex lg:items-start lg:py-4">
            <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
              <img
                src="/correctarro.svg"
                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
              />
              <div className="font-normal text-left text-[#4A5E6D] text-lg">
                Instantly Auto-Categorize Transactions and Adjust Entries
              </div>
            </div>
            <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
              <img
                src="/correctarro.svg"
                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
              />
              <div className="font-normal text-left text-[#4A5E6D] text-lg">
                Achieve Transaction Reconciliation with Bills, Invoices, <br />{" "}
                and Receipts in Seconds
              </div>
            </div>
            <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
              <img
                src="/correctarro.svg"
                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
              />
              <div className="font-normal text-left text-[#4A5E6D] text-lg">
                Generate Financial Statements Minutes After Closing <br />
                (Including Balance Sheet, Income Statement, and P&L)
              </div>
            </div>
          </div>
          <div className="px-4 md:mx-10 lg:mx-0 lg:w-3/4 lg:grid-cols-3 lg:justify-items-start">
            <div className="mx-auto flex flex-col md:flex-row gap-2 ">
              <a
                href=""
                className="flex h-12 w-full md:w-52 items-center justify-center rounded-md font-bold text-home-bg transition-colors duration-300 ease-in-out border-2 bg-[#3F57D6] text-white">
                Sign up for free
              </a>
            </div>
          </div>
        </div>
        {/* div 2 */}
        <div className="col-start-1 row-start-2 flex flex-col justify-center pb-0 sm:px-0 lg:col-start-2 lg:row-span-6 order-2 ">
          <img
            src="/rectandle.png"
            alt="Landing image"
            className="h-full w-full object-fit"
          />
        </div>
      </div>
    </>
  );
}

export default DunlinAi;
