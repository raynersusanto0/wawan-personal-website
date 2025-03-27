"use client";

export default function Header(){
    return (
        <header className="sticky top-0 left-0 z-50 w-full bg-gray-800 text-white md:px-8 py-4">
            <div className="w-full grid grid-cols-6 md:px-8 py-2">
                <div className="col-start-2 col-span-4 min-w-[60vw] flex justify-between items-center">
                    <a href="#">About Me</a>
                    <a href="#">Contact Me</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Projects</a>
                </div>
            </div>
        </header>

    )
}
