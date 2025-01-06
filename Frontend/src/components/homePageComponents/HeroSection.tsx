import { useContext } from "react";
import heroImage from "../../assets/HeroSectionImage.webp";
import { SmallCommonButton, SmallCommonButtonBorder } from "../commonFormElement/CommonButton";
import { scrollState } from "../../context/ScrollContext";

function HeroSection() {
  const { scrollToFeatures } = useContext(scrollState);
  return (
    <div className="w-full h-2/3 md:h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-full">
        <img
          src={heroImage}
          alt="Descriptive alt text"
          className="object-cover w-full h-full rounded-md"
        />

        {/* Smooth Layered Gradient Overlay */}
        <div className="rounded-md absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
        <div className="rounded-md absolute inset-0 bg-gradient-to-b from-transparent via-slate-800 to-black opacity-50" />
      </div>

      {/* Hero Content */}
      <div className="text-white w-full sm:w-2/3 flex flex-col flex-wrap gap-5 md:gap-14 relative bottom-36 sm:bottom-56 md:bottom-80 left-1/2 transform -translate-x-1/2 -translate-y-full sm:-translate-y-3/4 md:-translate-y-1/2 text-center">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold sm:px-10">
          Build better habits, one day at a time
        </h1>
        <p className="sm:font-medium">
          Track, maintain, and improve your daily habits with HabitHive's
          intuitive platform
        </p>
        <div className="flex flex-row justify-center gap-5">
          
          <SmallCommonButton type="button" label="Get Started" onClick={() => {}} />
          <SmallCommonButtonBorder type="button" label="Learn More" onClick={scrollToFeatures} />
        
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
