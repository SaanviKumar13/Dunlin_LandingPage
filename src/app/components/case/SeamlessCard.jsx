export default function SeamlessCard() {
  const items = [
    "Close transactions directly within QuickBooks.",
    "Effortlessly import, update, and export entries between QuickBooks or Excel.",
    "Seamlessly integrate with other essential software like Stripe, Bill.com, and EMS.",
    "Sync Changes Across Systems with a Click. Dunlin.ai Keeps Your Data Updated Automatically.",
    "Create and Distribute Reports Across Excel, Sheets, Ganister's Reporting Platform, and Other Formats.",
  ];
  return (
    <>
      <div className="mt-24 flex flex-col items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="mt-12 min-h-[25vh] lg:min-h-[45vh] w-10/12 shadow-[5px_5px_51.4px_0_rgba(0,0,0,0.1)] rounded-3xl p-4 "
          >
            <div className="flex items-center flex-shrink gap-6 lg:gap-16 h-full w-full flex-col lg:flex-row">
              <div className="bg-[#FDF6EC] h-full min-w-[35%] "></div>
              <div className="text-lg lg:text-[2.5rem] font-medium text-[#0A2850] lg:leading-[60px]">
                {item}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
