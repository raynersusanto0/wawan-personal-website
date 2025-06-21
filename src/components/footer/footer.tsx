"use client";

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer(){
    return (
        <footer className="bg-divBorderPurple py-6 mt-5">
            <div className="flex justify-center items-center space-x-8">
                <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-gray-400 transition-colors"
                >
                <img src='/footer/Instagram_Logo.png' style={{ width: '30px', height: 'auto' }}/>
                </a>
                <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-gray-400 transition-colors"
                >
                <img src='/footer/VGen_Logo.png' style={{ width: '30px', height: 'auto' }}/>
                </a>
                <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-gray-400 transition-colors"
                >
                <img src='/footer/ArtStation_Logo.png' style={{ width: '30px', height: 'auto' }}/>
                </a>
                                <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-gray-400 transition-colors"
                >
                <img src='/footer/Email_Logo.png' style={{ width: '30px', height: 'auto' }}/>
                </a>
            </div>
        </footer>
    )
}
