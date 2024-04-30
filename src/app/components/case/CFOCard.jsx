"use client";
import ScrollCarousel from "scroll-carousel-react";
export default function CFOCard({ items, dir }) {
  return (
    <div className="mt-24">
      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        direction={dir}
        margin={100}
        smartSpeed
      >
        {items.map((item, index) => (
          <div
            key={index}
            className=" p-4 rounded-3xl h-72 w-96 lg:h-80 lg:w-[30rem] border border-[#3F57D61A] flex flex-col items-center"
          >
            <div className="rounded-t-3xl bg-[#E8EBF7] h-4/5 w-full"></div>
            <div className="py-4 font-bricolage font-semibold text-lg lg:text-xl">
              {item}
            </div>
          </div>
        ))}
      </ScrollCarousel>
    </div>
  );
}
