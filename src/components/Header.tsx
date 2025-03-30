"use client";

export default function Header(){
    return (
        <header className="sticky top-0 left-0 z-50 w-full bg-black text-white md:px-8">
            <div className="w-full grid grid-cols-8 md:px-8 py-2">
                <div className="col-start-3 col-span-4 flex justify-between items-center text-headerYellow text-zl">
                    <a href="#"> ABOUT ME</a>
                    <a href="#"> PORTFOLIO</a>
                    <a href="#"> PROJECTS</a>
                    <a href="#"> CONTACT ME </a>
                </div>
            </div>
        </header>

    )
}
