import { Suspense } from "react";
import Footer from "../mobileComponents/Footer";
import Gallery from "../mobileComponents/Gallery";
import HeroSection from "../mobileComponents/Hero";
import InvestmentHotspot from "../mobileComponents/InvestmentHotspot";
import Payment from "../mobileComponents/Payment";
import PopularDestination from "../mobileComponents/PopularDestination";
import Register from "../mobileComponents/Register";
import Popup from "../mobileComponents/Popup";
import Apartments from "../mobileComponents/Apartments";
import ButtonPopup from "../mobileComponents/ButtonPopup";
import Communities from "../mobileComponents/Communities";

export default function MobileHome() {
  return (
    <main className="max-w-[786px] mx-auto">
      <HeroSection />
      <Apartments />
      <PopularDestination />
      <InvestmentHotspot />
      <Payment />
      <Gallery />
      <Communities />
      <Suspense>
        <Popup />
      </Suspense>
      <Suspense>
        <ButtonPopup />
      </Suspense>
      <Register />
      <Footer />
    </main>
  );
}
