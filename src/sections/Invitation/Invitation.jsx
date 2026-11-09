import Reveal from "../../components/common/Reveal.jsx";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import "./Invitation.css";

export default function Invitation() {
  return (
    <section id="invitation" className="invitation section-pad">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            kicker="With joyful hearts"
            title="You Are Invited"
            description="Together with our families, we invite you to share in the joy of our wedding celebration."
          />
        </Reveal>

        <Reveal>
          <div className="invitation-paper">
            <span className="invitation-flourish">❧</span>
            <p>Request the honour of your presence</p>
            <h3>Abdul Azeem</h3>
            <i>&amp;</i>
            <h3>Bushra</h3>
            <p>as they begin their journey together</p>
            <strong>07 DECEMBER 2026</strong>
            <p className="invitation-flourish">❧</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
