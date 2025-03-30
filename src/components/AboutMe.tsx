"use client";

export default function AboutMe(){
    return (
        <div className="relative grid grid-cols-3 my-5">
            <div className="col-start-1 grid grid-cols-3 py-2">
                <div className="absolute t-0 -left-2 w-38 col-start-1 col-span-1 bg-divBorderPurple rounded-r-full py-2">
                    <h1 className="text-center text-xl text-headerYellow">
                        About Me
                    </h1>
                </div>
                <div className="absolute t-0 left-32 col-start-1 w-100 col-span-2 bg-divBorderGreen rounded-r-full p-2 -z-1">
                    <h1 className="text-center text-xl text-black">
                        A short description about what I do on a daily basis
                    </h1>
                </div>
            </div>
        </div>

    )
}
