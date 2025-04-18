"use client";

export default function AboutMe()
{
    return (
        <div className="relative mt-10">
            <div className="hidden md:flex">
                <div className="flex justify-center items-center py-1 px-10 z-10 bg-divBorderPurple rounded-r-full">
                    <img
                        src="/header/symbol.png"
                        alt="Illustrative Example"
                        className="scale-75 mr-1"
                    />
                    <h1 className="text-center text-s text-[#ffffb4]">
                        About Me
                    </h1>
                </div>

                <div className="py-1 px-15 -ml-5 z-0 bg-divBorderGreen rounded-r-full">
                    <h1 className="text-center text-s text-black">
                        A short introduction from the one and only!
                    </h1>
                </div>
            </div>

            <div className="relative md:hidden items-center justify-center">
                <div className="text-center justify-center flex py-1 px-10 mt-5 bg-divBorderPurple rounded-full mx-auto w-2/5">
                    <img
                        src="/header/symbol.png"
                        alt="Illustrative Example"
                        className="scale-50 mr-1"
                    />
                    <h1 className="text-center text-s text-[#ffffb4]">
                        About Me
                    </h1>
                </div>

                <div className="py-1 px-10 mt-5 bg-divBorderGreen rounded-full mx-auto w-4/5">
                    <h1 className="text-center text-s text-black">
                        A short introduction from the one and only!
                    </h1>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4">
                {/* Left Block: Occupying 40% width on larger screens */}
                <div className="w-full sm:w-[40%] flex items-center justify-center">
                    <div className="text-center">
                        <img
                            src="/about_me/about_me_text.png"
                            alt="Illustrative Example"
                            className="relative scale-90 w-full sm:w-auto"
                        />
                    </div>
                </div>

                {/* Right Block: Occupying 60% width on larger screens */}
                <div className="w-full sm:w-[60%] flex items-center justify-center mt-4 sm:mt-0">
                    <img
                        src="/about_me/illustration_about_me.png"
                        alt="Illustrative Example"
                        className="w-full sm:w-auto"
                    />
                </div>
            </div>
        </div>

    )
}
