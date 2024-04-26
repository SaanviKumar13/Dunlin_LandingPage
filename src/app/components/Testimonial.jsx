import React from "react";
import { FaStar } from "react-icons/fa6";

function Testimonial() {
    return (
        <div className="flex flex-col bg-gray-100 p-6 lg:p-14 gap-8 flex-shrink-0">
            <p className="text-[#3F57D6] text-center font-bold text-2xl">
                Testimonial
            </p>
            <div className="text-center font-semibold text-3xl lg:text-6xl  leading-72 tracking-tighter text-[#0A2850]">
                Trusted by the best
            </div>

            <button className="flex items-center justify-center gap-4 bg-[#FFFFFF] text-[#3F57D6] font-bold lg:py-4 lg:px-8 px-4 py-2 mx-auto border-2 border-solid border-[#3F57D6] rounded-2xl mb-8">
                <span>Learn more</span>
            </button>

            <div className="grid md:grid-cols-3 gap-4 mt-10 lg:mx-4">
                <div className="grid gap-4">
                    <div className="border p-5 container min-h-auto flex flex-col rounded-lg bg-white shadow-md">
                        <div className="flex flex-row gap-4">
                            <img src="/menico.png" />
                            <div className="flex flex-col">
                                <p className="text-xl text-[#374151] font-medium">Georg R.</p>
                                <p className="text-md text-[#4C5A70] font-normal">Founder of StatusLink</p>
                            </div>
                        </div>
                        <p className="flex gap-2 items-center py-4">
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                        </p>
                        <p className="text-[#374151] text-md font-normal leading-relaxed tracking-tighter">
                            I was so surprised how easily could do what I
                            hoped it to be able to that
                            I subscribed within the
                            first hour
                            and I'm gonna port it to my other
                            company during the day 😅
                        </p>
                        <p className="text-[#4C5A70] text-md font-normal leading-relaxed tracking-tighter py-4">Mar 6, 2023</p>
                    </div>
                    <div className="border p-5 container min-h-auto flex flex-col bg-white shadow-md rounded-lg">
                        <div className="flex flex-row gap-4">
                            <img src="/man2icon.png" />
                            <div className="flex flex-col">
                                <p className="text-xl text-[#374151] font-medium">Jay Clouse</p>
                                <p className="text-md text-[#4C5A70] font-normal">@jayclouse</p>
                            </div>
                        </div>
                        <p className="flex gap-2 items-center py-4">
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                        </p>
                        <p className="text-[#374151] text-md font-normal leading-relaxed tracking-tighter">
                            We looked at several options to collect reviews
                            from our customers, before settling on What
                            drew us to  was the great user interface and
                            how easy the product was to use.
                            The setup was incredibly simple.
                            It took less than 5
                            minutes to get started with collecting reviews
                            . We
                            were able to import existing reviews as well, which
                            is such an important feature to have.
                            Senja seems like a well thought-out product. I'm
                            really happy that we've found Senja and will
                            absolutely be recommending the product to our
                            audience.
                            If you're on the fence, sign up for a free trial and see
                            how it works for you. Getting reviews from your
                            audience is a great dopamine hit. Don't miss out on
                            that !
                        </p>
                        <p className="text-[#4C5A70] text-md font-normal leading-relaxed tracking-tighter py-4">Mar 6, 2023</p>
                    </div>
                    <div className="border p-5 container min-h-auto flex flex-col rounded-lg bg-white shadow-md">
                        <div className="flex flex-row gap-4">
                            <img src="/man3icon.png" />
                            <div className="flex flex-col">
                                <p className="text-xl text-[#374151] font-medium">Matt Davies.</p>
                                <p className="text-md text-[#4C5A70] font-normal">Co-Founder at Funnel Packs</p>
                            </div>
                        </div>
                        <p className="flex gap-2 items-center py-4">
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                        </p>
                        <p className="text-[#374151] text-md font-normal leading-relaxed tracking-tighter">
                            I was so surprised how easily could do what I hoped it to be able
                            to that I subscribed within the first hour and I'm gonna port it
                            to my other company during the day 😅
                        </p>
                        <p className="text-[#4C5A70] text-md font-normal leading-relaxed tracking-tighter py-4">Mar 6, 2023</p>
                    </div>
                    <div className= " order p-5 container min-h-auto flex flex-col rounded-lg bg-white shadow-md">
                        <div className="flex flex-row gap-4">
                            <img src="/man3icon.png" />
                            <div className="flex flex-col">
                                <p className="text-xl text-[#374151] font-medium">Georg R.</p>
                                <p className="text-md text-[#4C5A70] font-normal">Founder of StatusLink</p>
                            </div>
                        </div>
                        <p className="flex gap-2 items-center py-4">
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                        </p>
                        <p className="text-[#374151] text-md font-normal leading-relaxed tracking-tighter">
                            I was so surprised how easily could do what I hoped it to be able
                            to that I subscribed within the first hour and I'm gonna port it
                            to my other company during the day 😅
                        </p>
                        <p className="text-[#4C5A70] text-md font-normal leading-relaxed tracking-tighter py-4">Mar 6, 2023</p>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="border rounded-lg bg-white shadow-md p-5 container min-h-auto flex flex-col">
                        <div className="flex flex-row gap-4">
                            <img src="/man3icon.png" />
                            <div className="flex flex-col">
                                <p className="text-xl text-[#374151] font-medium">Matt Davies</p>
                                <p className="text-md text-[#4C5A70] font-normal">Co-Founder at Funnel Packs</p>
                            </div>
                        </div>
                        <p className="flex gap-2 items-center py-4">
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                        </p>
                        <p className="text-[#374151] text-md font-normal leading-relaxed tracking-tighter">


                            We looked at several options to collect reviews
                            from our customers, before settling on What
                            drew us to  was the great user interface and
                            how easy the product was to use.
                            The setup was incredibly simple.
                            It took less than 5
                            minutes to get started with collecting reviews
                            . We
                            were able to import existing reviews as well, which
                            is such an important feature to have.
                            Senja seems like a well thought-out product. I'm
                            really happy that we've found Senja and will
                            absolutely be recommending the product to our
                            audience.
                            If you're on the fence, sign up for a free trial and see
                            how it works for you. Getting reviews from your
                            audience is a great dopamine hit. Don't miss out on
                            that !
                        </p>
                        <p className="text-[#4C5A70] text-md font-normal leading-relaxed tracking-tighter py-4">Mar 6, 2023</p>
                    </div>
                    <div className="border  rounded-lg bg-white shadow-md p-5 container min-h-auto flex flex-col">
                        <div className="flex flex-row gap-4">
                            <img src="/man2icon.png" />
                            <div className="flex flex-col">
                                <p className="text-xl text-[#374151] font-medium">Jamie Northrup</p>
                                <p className="text-md text-[#4C5A70] font-normal">Minimalist Hustler</p>
                            </div>
                        </div>
                        <p className="flex gap-2 items-center py-4">
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                        </p>
                        <p className="text-[#374151] text-md font-normal leading-relaxed tracking-tighter">

                            Senja made it so easy and quick to collect
                            testimonials.
                            Took me less than 5 minutes to start
                            collecting
                            them, and adding them to my website
                            was even quicker! Thanks for this awesome tool.
                        </p>
                        <p className="text-[#4C5A70] text-md font-normal leading-relaxed tracking-tighter py-4">Mar 6, 2023</p>
                    </div>
                    <div className="border  rounded-lg bg-white shadow-md p-5 container min-h-auto flex flex-col">
                        <div className="flex flex-row gap-4">
                            <img src="/man3icon.png" />
                            <div className="flex flex-col">
                                <p className="text-xl text-[#374151] font-medium">Sachin</p>
                                <p className="text-md text-[#4C5A70] font-normal">@sachibchoolur</p>
                            </div>
                        </div>
                        <p className="flex gap-2 items-center py-4">
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                        </p>
                        <p className="text-[#374151] text-md font-normal leading-relaxed tracking-tighter">

                            Senja made it so easy and quick to collect
                            testimonials.
                            Took me less than 5 minutes to start
                            collecting
                            them, and adding them to my website
                            was even quicker! Thanks for this awesome tool.
                        </p>
                        <p className="text-[#4C5A70] text-md font-normal leading-relaxed tracking-tighter py-4">Mar 6, 2023</p>
                    </div>
                    <div className="border  rounded-lg bg-white shadow-md p-5 container min-h-auto flex flex-col">
                        <div className="flex flex-row gap-4">
                            <img src="/man3icon.png" />
                            <div className="flex flex-col">
                                <p className="text-xl text-[#374151] font-medium">Ed Leake</p>
                                <p className="text-md text-[#4C5A70] font-normal">I'm good with Ads</p>
                            </div>
                        </div>
                        <p className="flex gap-2 items-center py-4">
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                        </p>
                        <p className="text-[#374151] text-md font-normal leading-relaxed tracking-tighter">
                            Do you know the sign of a good app/product? I
                            didn't have to read any documentation...
                            I just jumped in and put Senja to work - that's how
                            clean and clear the UX is.
                            It's a great testimonial gathering tool and reduces
                            friction. I went from 0 to 30 reviews in a matter of
                            days. It's also very fairly priced.
                        </p>
                        <p className="text-[#4C5A70] text-md font-normal leading-relaxed tracking-tighter py-4">Mar 6, 2023</p>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className=" rounded-lg bg-white shadow-md p-5 container min-h-auto flex flex-col">
                        <div className="flex flex-row gap-4">
                            <img src="/man3icon.png" />
                            <div className="flex flex-col">
                                <p className="text-xl text-[#374151] font-medium">Ed Leake</p>
                                <p className="text-md text-[#4C5A70] font-normal">I'm good with Ads</p>
                            </div>
                        </div>
                        <p className="flex gap-2 items-center py-4">
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                        </p>
                        <p className="text-[#374151] text-md font-normal leading-relaxed tracking-tighter">
                            Do you know the sign of a good app/product? I
                            didn't have to read any documentation...
                            I just jumped in and put Senja to work - that's how
                            clean and clear the UX is.
                            It's a great testimonial gathering tool and reduces
                            friction. I went from 0 to 30 reviews in a matter of
                            days. It's also very fairly priced.
                        </p>
                        <p className="text-[#4C5A70] text-md font-normal leading-relaxed tracking-tighter py-4">Mar 6, 2023</p>
                    </div>
                    <div className=" rounded-lg bg-white shadow-md p-5 container min-h-auto flex flex-col">
                        <div className="flex flex-row gap-4">
                            <img src="/menico.png" />
                            <div className="flex flex-col">
                                <p className="text-xl text-[#374151] font-medium">Ed Leake</p>
                                <p className="text-md text-[#4C5A70] font-normal">I'm good with Ads</p>
                            </div>
                        </div>
                        <p className="flex gap-2 items-center py-4">
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                        </p>
                        <p className="text-[#374151] text-md font-normal leading-relaxed tracking-tighter">
                            Matt Davies
                            Co-Founder at Funnel Packs
                            We looked at several options to collect reviews
                            from our customers, before settling on Senja. What
                            drew us to Senja was the great user interface and
                            how easy the product was to use.
                            The setup was incredibly simple.
                            It took less than 5
                            minutes to get started with collecting reviews
                            . We
                            were able to import existing reviews as well, which
                            is such an important feature to have.
                            Senja seems like a well thought-out product. I'm
                            really happy that we've found Senja and will
                            absolutely be recommending the product to our
                            audience.
                            If you're on the fence, sign up for a free trial and see
                            how it works for you. Getting reviews from your
                            audience is a great dopamine hit. Don't miss out on
                            that !
                            Mar 2, 2023
                        </p>
                        <p className="text-[#4C5A70] text-md font-normal leading-relaxed tracking-tighter py-4">Mar 6, 2023</p>
                    </div>   
                    <div className=" rounded-lg bg-white shadow-md p-5 container min-h-auto flex flex-col">
                        <div className="flex flex-row gap-4">
                            <img src="/man2icon.png" />
                            <div className="flex flex-col">
                                <p className="text-xl text-[#374151] font-medium">Ed Leake</p>
                                <p className="text-md text-[#4C5A70] font-normal">I'm good with Ads</p>
                            </div>
                        </div>
                        <p className="flex gap-2 items-center py-4">
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                            <FaStar className="text-yellow-500 text-2xl" />
                        </p>
                        <p className="text-[#374151] text-md font-normal leading-relaxed tracking-tighter">
                            Do you know the sign of a good app/product? I
                            didn't have to read any documentation...
                            I just jumped in and put Senja to work - that's how
                            clean and clear the UX is.
                            It's a great testimonial gathering tool and reduces
                            friction. I went from 0 to 30 reviews in a matter of
                            days. It's also very fairly priced.
                            Do you know the sign of a good app/product? I
                            didn't have to read any documentation...
                            I just jumped in and put Senja to work - that's how
                            clean and clear the UX is.
                            It's a great testimonial gathering tool and reduces
                            friction. I went from 0 to 30 reviews in a matter of
                            days. It's also very fairly priced.
                        </p>
                        <p className="text-[#4C5A70] text-md font-normal leading-relaxed tracking-tighter py-4">Mar 6, 2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
