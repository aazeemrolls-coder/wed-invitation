import Reveal from "../../components/common/Reveal.jsx";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import weddingData from "../../data/weddingData.js";
import { CalendarDays, Heart } from "lucide-react";
import "./SaveTheDate.css";

export default function SaveTheDate() {
  const weddingDate = new Date(weddingData.wedding.date);

  const year = weddingDate.getFullYear();
  const month = weddingDate.toLocaleString("en-US", {
    month: "long",
  });
  const day = weddingDate.getDate();

  const weekday = weddingDate.toLocaleString("en-US", {
    weekday: "long",
  });

  // Generate Google Calendar dates from weddingData
  const formatCalendarDate = (date) => {
    return (
      date.getFullYear() +
      String(date.getMonth() + 1).padStart(2, "0") +
      String(date.getDate()).padStart(2, "0") +
      "T" +
      String(date.getHours()).padStart(2, "0") +
      String(date.getMinutes()).padStart(2, "0") +
      "00"
    );
  };

  const startDate = new Date(weddingDate);
  const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000);

  const calendarUrl = new URL("https://calendar.google.com/calendar/render");

  calendarUrl.search = new URLSearchParams({
    action: "TEMPLATE",
    text: `Wedding Celebration - ${weddingData.groom.name}`,
    dates: `${formatCalendarDate(startDate)}/${formatCalendarDate(endDate)}`,
    details: `Join us to celebrate the wedding of ${weddingData.groom.name}`,
    location: `${weddingData.wedding.venue}, ${weddingData.wedding.address}`,
  }).toString();

  return (
    <section id="savethedate" className="savethedate section-pad">
      <div className="section-shell savethedate-shell">
        <Reveal>
          <SectionHeading
            kicker="A beautiful beginning awaits"
            title="Save the Date"
            description="A special day, a lifetime of memories. We would love to have you celebrate with us."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="date-card">
            <div className="date-card-inner">
              {/* <div className="date-decoration date-decoration-top">✧</div> */}

              <p className="date-card-kicker">WE ARE GETTING MARRIED</p>

              <div className="date-heart">
                <Heart size={19} strokeWidth={1.2} />
              </div>

              <span className="date-month">{month}</span>

              <div className="date-number-wrapper">
                <span className="date-side-line" />

                <strong className="date-number">
                  {String(day).padStart(2, "0")}
                </strong>

                <span className="date-side-line" />
              </div>

              <span className="date-weekday">
                {weekday} · {year}
              </span>

              <div className="date-divider">
                <span />
                <i>✦</i>
                <span />
              </div>

              <a
                className="date-calendar-button"
                href={calendarUrl.toString()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarDays size={17} strokeWidth={1.6} />

                <span className="calendar-button-text">
                  Add to Google Calendar
                </span>

                <span className="calendar-arrow">↗</span>
              </a>

              {/* <div className="date-decoration date-decoration-bottom">✧</div> */}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
