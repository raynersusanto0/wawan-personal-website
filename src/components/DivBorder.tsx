"use client";

export default function DivBorder()
{
    return (
        <div className="relative my-5 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Purple block */}
                <div className="relative sm:col-span-1">
                    <div className="bg-divBorderPurple rounded-r-full py-2 px-4 w-full sm:max-w-xs">
                        <h1 className="text-center text-xl text-headerYellow">
                            About Me
                        </h1>
                    </div>
                </div>

                {/* Green block */}
                <div className="relative sm:col-span-2">
                    <div className="bg-divBorderGreen rounded-r-full py-2 px-4 w-full sm:max-w-2xl">
                        <h1 className="text-center text-xl text-black">
                            A short introduction from the one and only!
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
