import { Suspense } from "react";
import Apartments from "../desktopComponents/Apartments";
import Gallery from "../desktopComponents/Gallery";
import HeroSection from "../desktopComponents/Hero";
import InvestmentHotspot from "../desktopComponents/InvestmentHostpot";
import PopularDestination from "../desktopComponents/PopularDestination";
import Popup from "../desktopComponents/Popup";
import Register from "../desktopComponents/Register";
import ButtonPopup from "../desktopComponents/ButtonPopup";
import Footer from "../desktopComponents/Footer";
import About from "../desktopComponents/About";
import Communities from "../desktopComponents/Communities";

export default function DesktopHome() {
  return (
    <main className="">
      <HeroSection />
      <About />
      <Apartments />
      <PopularDestination />
      <InvestmentHotspot />
      <Suspense>
        <Popup />
      </Suspense>
      <Suspense>
        <ButtonPopup />
      </Suspense>
      <Gallery />
      <Communities />
      <Register />
      <Footer />
    </main>
  );
}
