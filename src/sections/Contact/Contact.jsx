import Reveal from "../../components/common/Reveal.jsx";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import weddingData from "../../data/weddingData.js";
import { Phone, Mail, MessageCircle, Heart, ArrowUpRight } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const phoneNumbers = weddingData.contact.phone
    .split(",")
    .map((phone) => phone.trim())
    .filter(Boolean);

  const email = weddingData.contact.email;

  return (
    <section id="contact" className="contact section-pad">
      <div className="section-shell contact-shell">
        <Reveal>
          <SectionHeading
            kicker="We are here for you"
            title="Get in Touch"
            description="For any questions or assistance, please feel free to reach out to our family. We would be happy to help."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="contact-card">
            <div className="contact-card-inner">
              {/* Decorative heading */}
              <div className="contact-ornament">
                <span />
                <Heart size={20} strokeWidth={1.3} />
                <span />
              </div>

              <p className="contact-card-kicker">FOR ANY ENQUIRIES</p>

              <h3>{weddingData.contact.name}</h3>

              <p className="contact-card-description">
                We would love to hear from you.
                <br />
                Please contact us anytime.
              </p>

              {/* Phone contacts */}
              <div className="contact-details">
                {phoneNumbers.map((phone, index) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                    className="contact-item"
                  >
                    <div className="contact-icon">
                      <Phone size={19} strokeWidth={1.5} />
                    </div>

                    <div className="contact-item-content">
                      <span>
                        {phoneNumbers.length > 1
                          ? `CONTACT ${index + 1}`
                          : "PHONE NUMBER"}
                      </span>
                      <strong>{phone}</strong>
                    </div>

                    <ArrowUpRight className="contact-arrow" size={17} />
                  </a>
                ))}

                {/* Email */}
                <a href={`mailto:${email}`} className="contact-item">
                  <div className="contact-icon">
                    <Mail size={19} strokeWidth={1.5} />
                  </div>

                  <div className="contact-item-content">
                    <span>EMAIL ADDRESS</span>
                    <strong>{email}</strong>
                  </div>

                  <ArrowUpRight className="contact-arrow" size={17} />
                </a>
              </div>

              <div className="contact-bottom">
                <span />
                <Heart size={15} />
                <span />
              </div>

              <p className="contact-thankyou">
                Thank you for being part of our special day.
              </p>

              <div className="contact-card-footer">WITH LOVE & JOY</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
