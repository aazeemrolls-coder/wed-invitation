import Reveal from "../../components/common/Reveal.jsx";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero section-pad">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            kicker="Two hearts, one beautiful beginning"
            title="A day to remember"
            description="We are so excited to celebrate this special chapter with the people we love most."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="hero-monogram">
            <span>A</span>
            <i>&amp;</i>
            <span>B</span>
          </div>

          <p className="hero-date">07 · 12 · 2026</p>
        </Reveal>
      </div>
    </section>
  );
}
