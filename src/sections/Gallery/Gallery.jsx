import Reveal from "../../components/common/Reveal.jsx";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import "./Gallery.css";

export default function Gallery() {
  return (
    <section id="gallery" className="gallery section-pad">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            kicker="A few memories before forever"
            title="Our Moments"
            description="A little collection of moments from our journey together."
          />
        </Reveal>

        <Reveal>
          <div className="gallery-grid">
            <div className="gallery-tile gallery-tile--one">A moment</div>
            <div className="gallery-tile gallery-tile--two">Together</div>
            <div className="gallery-tile gallery-tile--three">Forever</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
