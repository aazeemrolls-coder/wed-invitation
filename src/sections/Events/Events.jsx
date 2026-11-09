import Reveal from "../../components/common/Reveal.jsx";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import eventsData from "../../data/eventsData.js";
import { CalendarDays, Clock3, Sparkles } from "lucide-react";
import "./Events.css";

export default function Events() {
  return (
    <section id="events" className="events-section section-pad">
      <div className="section-shell events-shell">
        <Reveal>
          <SectionHeading
            kicker="A celebration of love"
            title="Wedding Events"
            description="Join us for beautiful moments, joyful traditions and a celebration filled with love and happiness."
          />
        </Reveal>

        <div className="event-grid">
          {eventsData.map((event, index) => (
            <Reveal key={event.id} delay={index * 0.12}>
              <article className="event-card">
                <div className="event-card-inner">
                  {/* Decorative top */}
                  <div className="event-card-ornament">
                    <span />
                    <Sparkles size={17} strokeWidth={1.3} />
                    <span />
                  </div>

                  {/* Event number */}
                  <div className="event-number">
                    {String(event.id).padStart(2, "0")}
                  </div>

                  <p className="event-card-kicker">YOU ARE INVITED TO</p>

                  {/* Event name */}
                  <h3>{event.name}</h3>

                  <div className="event-divider">
                    <span />
                    <i>✦</i>
                    <span />
                  </div>

                  {/* Date */}
                  <div className="event-detail">
                    <CalendarDays size={17} strokeWidth={1.5} />
                    <span>{event.date}</span>
                  </div>

                  {/* Time */}
                  <div className="event-detail">
                    <Clock3 size={17} strokeWidth={1.5} />
                    <span>{event.time}</span>
                  </div>

                  {/* Description */}
                  <p className="event-description">{event.description}</p>

                  <div className="event-card-bottom">
                    <span>WITH LOVE & JOY</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
