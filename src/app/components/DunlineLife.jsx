import React from "react";
import { FaStar } from "react-icons/fa6";

function DunlineLife() {
  return (
    <>
          <div className="flex flex-col lg:flex-row bg-[#3F57D6] p-6 lg:p-14 gap-10 flex-shrink-0 text-white">
              <div className="w-full lg:w-1/2 p-2 lg:p-6 order-1 lg:order-none">
                  <p className="text-blue-50 font-caveat font-bold text-2xl leading-10 tracking-tighter mb-3">
                      life was boring
                  </p>
                  <h1 className="font-semibold text-5xl lg:text-7xl leading-72 tracking-tighter">
                      How Dunlin <br /> changes your life
                  </h1>
              </div>
              <div className="w-full lg:w-1/2 p-6 lg:p-6 order-2 lg:order-none">
                  <button className="items-center justify-center gap-4 bg-[#FFFFFF] text-[#3F57D6] font-bold lg:py-4 lg:px-8 px-4 py-2 my-5 border-4 border-solid border-gray-300 rounded-2xl">
                      <span>Start for free today</span>
                  </button>

                  <div className="flex-col items-center justify-center">
                      <div className="flex items-center">
                          <div className="flex -space-x-4 rtl:space-x-reverse">
                              <img
                                  className="w-12 h-12 border-2 border-white rounded-full dark:border-white"
                                  src="/menico.png"
                                  alt="icon2"
                              />
                              <img
                                  className="w-12 h-12 border-2 border-white rounded-full dark:border-white"
                                  src="/man2icon.png"
                                  alt="icon1"
                              />
                              <img
                                  className="w-12 h-12 border-2 border-white rounded-full dark:border-white"
                                  src="/man3icon.png"
                                  alt="icon2"
                              />
                          </div>
                          <div className="flex flex-col ml-4">
                              <p className="flex gap-1 items-center">
                                  <FaStar className="text-yellow-500 text-sm" />
                                  <FaStar className="text-yellow-500 text-sm" />
                                  <FaStar className="text-yellow-500 text-sm" />
                                  <FaStar className="text-yellow-500 text-sm" />
                                  <FaStar className="text-yellow-500 text-sm" />
                              </p>
                              <p className="text-base font-normal text-white">
                                  loved by 15,00+ people
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="flex flex-col lg:flex-row bg-[#3F57D6] p-6 lg:p-14 gap-10 flex-shrink-0 text-white">
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-2 lg:p-6 order-1 lg:order-none flex-shrink-0 rounded-tl-3xl rounded-tr-3xl bg-[#27262B] shadow-lg">
                  <p className="text-2xl text-center text-[#f99] font-bricolage font-bold text-33.488 leading-46.129 tracking-tighter my-10">
                      {" "}
                      Before{" "}
                  </p>
                  <div className="bg-[#19181B] p-10 rounded-lg mb-5 w-full">
                      <p className="text-white text-center font-BricolageGrotesque font-medium text-lg leading-[32.651px] tracking-tighter">
                          Spend weeks on month end Close (Categorizing, Adjusting,
                          Reconciling and Reporting)
                      </p>
                  </div>
                  <div className="bg-[#19181B] p-10 rounded-lg mb-5 w-full">
                      <p className="text-white text-center font-BricolageGrotesque font-medium text-lg leading-[32.651px] tracking-tighter">
                          Hours Spent on building Customized Reports
                      </p>
                  </div>
                  <div className="bg-[#19181B] p-10 rounded-lg mb-5 w-full">
                      <p className="text-white text-center font-BricolageGrotesque font-medium text-lg leading-[32.651px] tracking-tighter">
                          Share identical reports with all stakeholders.
                      </p>
                  </div>
                  <div className="bg-[#19181B] p-10 rounded-lg mb-5 w-full">
                      <p className="text-white text-center font-BricolageGrotesque font-medium text-lg leading-[32.651px] tracking-tighter">
                          Work Across Different Systems
                      </p>
                  </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-2 lg:p-6 order-1 lg:order-none flex-shrink-0 rounded-tl-3xl rounded-tr-3xl bg-[#19181B] shadow-lg">
                  <button className="gap-4 bg-[#D9FFEF] text-[#44C38E] text-2xl font-bold lg:py-4 lg:px-28 px-4 py-2 my-6 rounded-full">
                      <span>After </span>
                  </button>
                  <div className="bg-[#27262B] p-10 rounded-lg mb-5 w-full">
                      <p className="text-white text-center font-BricolageGrotesque font-medium text-lg leading-[32.651px] tracking-tighter">
                          Autocomplete Month-End Close in a few hours.
                      </p>
                  </div>
                  <div className="bg-[#27262B] p-10 rounded-lg mb-5 w-full">
                      <p className="text-white text-center font-BricolageGrotesque font-medium text-lg leading-[32.651px] tracking-tighter">
                          Instant Reports with One Click
                      </p>
                  </div>
                  <div className="bg-[#27262B] p-10 rounded-lg mb-5 w-full">
                      <p className="text-white text-center font-BricolageGrotesque font-medium text-lg leading-[32.651px] tracking-tighter">
                          Consolidated and Centralized Financial System
                      </p>
                  </div>
                  <div className="bg-[#27262B] p-10 rounded-lg mb-5 w-full">
                      <p className="text-white text-center font-BricolageGrotesque font-medium text-lg leading-[32.651px] tracking-tighter">
                          Tailor reports uniquely for each stakeholder to convey specific
                          insights.
                      </p>
                  </div>
              </div>
          </div>
    </>
    
  );
}

export default DunlineLife;
