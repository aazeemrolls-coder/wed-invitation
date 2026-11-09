import "./SectionHeading.css";
export default function SectionHeading({
  kicker,
  title,
  description,
  light = false,
}) {
  return (
    <div className={`section-heading-wrap ${light ? "is-light" : ""}`}>
      {kicker && <p className="section-kicker">{kicker}</p>}
      <h2 className="section-heading">{title}</h2>
      <span className="gold-rule" />
      {description && <p className="section-copy">{description}</p>}
    </div>
  );
}
