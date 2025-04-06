"use client";

export default function AboutMe(){
    return (
        <div className="gap-y-[5em] grid grid-row-2">
            <div className="row-start-1 relative grid grid-cols-3 my-5">
                <div className="col-start-1 grid grid-cols-3 py-2">
                    <div className="absolute t-0 -left-2 md:w-38 col-start-1 col-span-1 bg-divBorderPurple rounded-r-full py-2">
                        <h1 className="text-center text-xl text-headerYellow">
                            About Me
                        </h1>
                    </div>
                    <div className="absolute t-0 left-32 col-start-1 md:w-100 col-span-2 bg-divBorderGreen rounded-r-full p-2 -z-1">
                        <h1 className="text-center text-xl text-black">
                            A short introduction from the one and only!
                        </h1>
                    </div>
                </div>
            </div>

            <div className="row-start-2 grid grid-cols-2 mx-[2em]">
                <div className="relative col-start-1 mx-[6em] mt-[5em]">
                    <img src="/about_me/animated_header.png" width="496px" alt="Illustrative Example" className=""/>
                    <img src="/about_me/about_me_body.png" width="453px" alt="Illustrative Example" className="absolute top-16 left-9 -z-1" />
                </div>
                <div className="col-start-2">
                    <img src="/about_me/illustration_about_me.png" width={1000} height={1000} alt="Illustrative Example"/>
                </div>
            </div>
        </div>

    )
}
