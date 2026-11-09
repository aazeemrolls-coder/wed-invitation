import SectionHeading from "../../components/common/SectionHeading.jsx";
import Reveal from "../../components/common/Reveal.jsx";
import CountdownClock from "../../components/common/CountdownClock.jsx";
import weddingData from "../../data/weddingData.js";
import { Heart, Sparkles } from "lucide-react";
import "./Countdown.css";

export default function Countdown() {
  return (
    <section id="countdown" className="countdown-section section-pad">
      <div className="section-shell countdown-shell">
        <Reveal>
          <SectionHeading
            // kicker="The moment we've been waiting for"
            title="Counting Down to Forever"
            // description="Every second brings us closer to a beautiful beginning. We cannot wait to celebrate with you."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="countdown-card">
            <div className="countdown-card-inner">
              {/* <div className="countdown-ornament">
                <span />
                <Sparkles size={20} strokeWidth={1.2} />
                <span />
              </div> */}

              <p className="countdown-kicker">OUR JOURNEY BEGINS IN</p>

              <div className="countdown-clock-wrap">
                <CountdownClock target={weddingData.wedding.date} />
              </div>

              <div className="countdown-divider">
                <span />
                <Heart size={17} strokeWidth={1.3} />
                <span />
              </div>

              {/* <p className="countdown-message">
                Two hearts. One promise.
                <br />A lifetime of love.
              </p>

              <h3 className="countdown-couple">
                {weddingData.bride.name}
                <i>&</i>
                {weddingData.groom.name}
              </h3>

              <p className="countdown-date">
                {weddingData.wedding.displayDate}
              </p> */}

              {/* <div className="countdown-bottom-ornament">✧</div> */}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
