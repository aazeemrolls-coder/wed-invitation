import weddingData from '../../data/weddingData.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>With love,</p>
      <strong>{weddingData.bride.name} &amp; {weddingData.groom.name}</strong>
      <span>We can't wait to celebrate with you</span>
    </footer>
  );
}