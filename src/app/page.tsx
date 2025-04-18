import Image from "next/image";
import Header from "@/components/Header";
import AboutMe from "@/components/about_me/AboutMe";

export default function Home()
{
  return (
    <div className="min-h-screen relative">
      {/* Background image with responsive styles */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/background_image.png"
          alt="Cover Image"
          layout="fill" // Takes the full container space
          objectFit="cover" // Ensures the image covers the entire container
          objectPosition="center" // Keeps the image centered
          className="w-full h-full" // Makes the image take up the full width and height
        />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <AboutMe />
      </div>
    </div>
  );
}
