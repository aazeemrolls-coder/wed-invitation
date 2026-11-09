import Reveal from "../../components/common/Reveal.jsx";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import weddingData from "../../data/weddingData.js";
import { MapPin, Navigation, MapPinned, Heart } from "lucide-react";
import "./Venue.css";

export default function Venue() {
  return (
    <section id="venue" className="venue-section section-pad">
      <div className="section-shell venue-shell">
        <Reveal>
          <SectionHeading
            kicker="We saved you a seat"
            title="The Venue"
            description="A beautiful place, a special day and the people we love. We cannot wait to welcome you."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="venue-card">
            <div className="venue-card-inner">
              {/* Decorative top */}
              <div className="venue-ornament">
                <span />
                <Heart size={19} strokeWidth={1.3} />
                <span />
              </div>

              {/* Venue visual */}
              <div className="venue-art">
                <div className="venue-art-overlay" />

                <div className="venue-art-content">
                  <MapPinned size={42} strokeWidth={1} />

                  <p>OUR WEDDING CELEBRATION</p>

                  <h3>{weddingData.wedding.venue}</h3>

                  <span>MUZAFFARNAGAR</span>
                </div>

                <span className="venue-art-corner venue-art-corner--top">
                  ✧
                </span>
                <span className="venue-art-corner venue-art-corner--bottom">
                  ✧
                </span>
              </div>

              {/* Venue information */}
              <div className="venue-information">
                <p className="venue-information-kicker">
                  THE PLACE TO CELEBRATE LOVE
                </p>

                <h3>{weddingData.wedding.venue}</h3>

                <div className="venue-address">
                  <MapPin size={20} strokeWidth={1.5} />

                  <p>{weddingData.wedding.address}</p>
                </div>

                <div className="venue-time">
                  <span>WEDDING DAY</span>
                  <i>✦</i>
                  <span>{weddingData.wedding.displayDate}</span>
                </div>

                <a
                  className="venue-directions-button"
                  href={weddingData.wedding.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation size={17} />
                  Get Directions
                  <span>↗</span>
                </a>
              </div>

              <div className="venue-bottom-ornament">
                <span />
                <Heart size={15} />
                <span />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
