"use client";

import { useState } from "react";
import Link from 'next/link'

export default function Header()
{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () =>
    {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 left-0 z-50 w-full bg-black text-white md:px-8">
            {/* Desktop View */}
            <div className="w-full grid grid-cols-8 md:px-8 py-2 hidden md:block">
                <div className="mx-50 col-start-3 col-span-4 flex justify-between items-center text-headerYellow text-zl">
                    <Link href="/AboutMe">ABOUT ME</Link>
                    <a href="#">PORTFOLIO</a>
                    <a href="#">PROJECTS</a>
                    <a href="#">CONTACT ME</a>
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex justify-between items-center py-2 px-4">
                <button
                    className="text-white text-2xl"
                    onClick={toggleMenu}
                >
                    ☰
                </button>

                {/* Menu */}
                {isMenuOpen && (
                    <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-75 flex flex-col items-center pt-20">
                        <button
                            className="absolute top-4 right-4 text-white text-3xl"
                            onClick={toggleMenu}
                        >
                            ✖
                        </button>
                        <Link href="/AboutMe" className="py-2 text-white text-lg" onClick={toggleMenu}>
                            ABOUT ME
                        </Link>
                        <a href="#" className="py-2 text-white text-lg" onClick={toggleMenu}>
                            PORTFOLIO
                        </a>
                        <a href="#" className="py-2 text-white text-lg" onClick={toggleMenu}>
                            PROJECTS
                        </a>
                        <a href="#" className="py-2 text-white text-lg" onClick={toggleMenu}>
                            CONTACT ME
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}
