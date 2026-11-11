import { useEffect } from "react";
import Lenis from "lenis";
import Opening from "../sections/Opening/Opening.jsx";
import Couple from "../sections/Couple/Couple.jsx";
import Invitation from "../sections/Invitation/Invitation.jsx";
import SaveTheDate from "../sections/SaveTheDate/SaveTheDate.jsx";
import Venue from "../sections/Venue/Venue.jsx";
import Countdown from "../sections/Countdown/Countdown.jsx";
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
      <Couple />
      <Invitation />
      <SaveTheDate />
      <Venue />
      <Countdown />
      <MusicPlayer />
    </main>
  );
}
