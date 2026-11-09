import { useEffect } from "react";
import Lenis from "lenis";
import Opening from "../sections/Opening/Opening.jsx";
import Hero from "../sections/Hero/Hero.jsx";
import Couple from "../sections/Couple/Couple.jsx";
import Invitation from "../sections/Invitation/Invitation.jsx";
import SaveTheDate from "../sections/SaveTheDate/SaveTheDate.jsx";
import Events from "../sections/Events/Events.jsx";
import Venue from "../sections/Venue/Venue.jsx";
import DressCode from "../sections/DressCode/DressCode.jsx";
import Gifts from "../sections/Gifts/Gifts.jsx";
import Gallery from "../sections/Gallery/Gallery.jsx";
import Contact from "../sections/Contact/Contact.jsx";
import Countdown from "../sections/Countdown/Countdown.jsx";
import Footer from "../components/layout/Footer.jsx";
import MusicPlayer from "../components/common/MusicPlayer.jsx";

export default function WeddingInvitation() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <Opening />
      {/* <Hero /> */}
      <Couple />
      <Invitation />
      <SaveTheDate />
      {/* <Events /> */}
      <Venue />
      {/* <DressCode /> */}
      {/* <Gifts /> */}
      {/* <Gallery /> */}
      {/* <Contact /> */}
      <Countdown />
      {/* <Footer /> */}
      <MusicPlayer />
    </main>
  );
}
