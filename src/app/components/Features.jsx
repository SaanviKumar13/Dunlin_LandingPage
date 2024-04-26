import React from "react";

function Features() {
  return (
    <>
      <div className="flex items-center justify-center lg:p-24 p-10 gap-4 ">
        <p className="text-[#3F57D6] font-bricolage-grotesque font-bold lg:text-6xl text-2xl leading-[53.575px] tracking-[2.041px]">
          Dunlin
        </p>
        <img
          src="/ai.png"
          className=" lg:w-auto lg:h-auto w-10 h-10"
          alt="AI"
        />
        <p className="text-[#0A2850] font-bricolage-grotesque font-bold lg:text-6xl text-2xl leading-[53.575px] tracking-[2.041px]">
          Features
        </p>
      </div>
      <div className="flex flex-col gap-10 h-auto lg:flex-row lg:p-5 p-0 lg:mx-10 mx-0">
        {/* div 1  */}
        <div className="order-1 md:px-16 flex flex-col text-left lg:text-left">
          <p className="p-4 lg:p-4 text-[#3F57D6] font-bold lg:text-2xl text-md">
            Text
          </p>
          <h1 className=" p-4 lg:p-4 text-2xl font-normal tracking-tight text-[#061B36] lg:text-4xl">
            <label className="block">
              Zero-Touch Transection{" "}
              <span className="hidden lg:inline">
                <br />
              </span>{" "}
              Categorization.
            </label>{" "}
          </h1>
          <div className="flex flex-wrap justify-center items-center text-center p-4 sm:flex-row md:flex-col md:p-4 lg-flex lg:items-start lg:py-4">
            <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
              <img
                src="/correctarro.svg"
                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
              />
              <div className="font-normal text-left text-[#4A5E6D] text-lg">
                Automatically categorize transactions down to the <br />{" "}
                smallest account.
              </div>
            </div>
            <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
              <img
                src="/correctarro.svg"
                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
              />
              <div className="font-normal text-left text-[#4A5E6D] text-lg">
                Detect and resolve bookkeeping errors .<br /> effortlessly with
                our advanced error detection technology.
              </div>
            </div>
            <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
              <img
                src="/correctarro.svg"
                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
              />
              <div className="font-normal text-left text-[#4A5E6D] text-lg">
                Craft Customized workflows and improve precision <br />
                through Ganister's self-learning capabilities.
              </div>
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
            Text
          </p>
          <h1 className=" p-4 lg:p-4 text-2xl font-normal tracking-tight text-[#061B36] lg:text-4xl">
            <label className="block">
              Instant Transaction Reconciliation{" "}
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
            Text
          </p>
          <h1 className=" p-4 lg:p-4 text-2xl font-normal tracking-tight text-[#061B36] lg:text-4xl">
            <label className="block">
              Simplified Transaction Inquiries with{" "}
              <span className="hidden lg:inline">
                <br />
              </span>{" "}
              One-Click Access
            </label>{" "}
          </h1>
          <div className="flex flex-wrap justify-center items-center text-center p-4 sm:flex-row md:flex-col md:p-4 lg-flex lg:items-start lg:py-4">
            <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
              <img
                src="/correctarro.svg"
                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
              />
              <div className="font-normal text-left text-[#4A5E6D] text-lg">
                Instantly inquire about transactions with clients or employees.
              </div>
            </div>
            <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
              <img
                src="/correctarro.svg"
                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
              />
              <div className="font-normal text-left text-[#4A5E6D] text-lg">
                Quickly detect missing data and request documents like bills,{" "}
                <br /> invoices, contracts, and receipts.
              </div>
            </div>
            <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
              <img
                src="/correctarro.svg"
                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
              />
              <div className="font-normal text-left text-[#4A5E6D] text-lg">
                Preserve a unified source of truth without the need for <br />
                manual data requests or imports.
              </div>
            </div>
            <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
              <img
                src="/correctarro.svg"
                className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
              />
              <div className="font-normal text-left text-[#4A5E6D] text-lg">
                Automate reconciliation without the need to track <br />
                every conversation, utilizing the auto-reconcile feature.
              </div>
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
                      Text
                  </p>
                  <h1 className=" p-4 lg:p-4 text-2xl font-normal tracking-tight text-[#061B36] lg:text-4xl">
                      <label className="block">
                          Customized and Automated {" "}
                          <span className="hidden lg:inline">
                              <br />
                          </span>{" "}
                          Entry Adjustments
                      </label>{" "}
                  </h1>
                  <div className="flex flex-wrap justify-center items-center text-center p-4 sm:flex-row md:flex-col md:p-4 lg-flex lg:items-start lg:py-4">
                      <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
                          <img
                              src="/correctarro.svg"
                              className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
                          />
                          <div className="font-normal text-left text-[#4A5E6D] text-lg">
                              Accurately adjust entries for amortization and <br/> depreciation
                          </div>
                      </div>
                      <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
                          <img
                              src="/correctarro.svg"
                              className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
                          />
                          <div className="font-normal text-left text-[#4A5E6D] text-lg">
                             Automatically identify missed accruals and defers, and  <br />{" "}
                              facilitate seamless transaction transfer across months
                          </div>
                      </div>
                      <div className="w-full md:w-387 h-70 flex-shrink-0 flex items-center gap-4 py-4">
                          <img
                              src="/correctarro.svg"
                              className="flex-shrink-0 w-10 p-1 rounded-xl bg-home-logo"
                          />
                          <div className="font-normal text-left text-[#4A5E6D] text-lg">
                             Leverage intelligent estimate entry suggestions from  <br />
                             Ganister.
                          </div>
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
    </>
  );
}

export default Features;
