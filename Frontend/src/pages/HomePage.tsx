import AboutUs from "../components/homePageComponents/AboutUs";
import ThreeCardSection from "../components/homePageComponents/ThreeCardSection";
import HeroSection from "../components/homePageComponents/HeroSection";
import UserSaySection from "../components/homePageComponents/UserSaySection";
import ContactUs from "../components/homePageComponents/ContactUs";

function HomePage() {
  return (
    <div className="w-full h-full flex flex-col bg-slate-50">
      <div className="w-full sm:w-3/4 mx-auto">
        <HeroSection />
        <ThreeCardSection />
        <UserSaySection />
        <AboutUs />
        <ContactUs />
      </div>
    </div>
  );
}

export default HomePage;
