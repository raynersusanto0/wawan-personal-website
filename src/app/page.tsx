import Image from "next/image";
import Header from "@/components/Header";
import AboutMe from "@/components/about_me/AboutMe";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Image src={"/background/background_image.png"} alt="Cover Image" width={1920} height={4320} className="bg-img" />
      <Header />
      <AboutMe />
    </div>
  );
}
