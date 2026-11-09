import Reveal from '../../components/common/Reveal.jsx';
import SectionHeading from '../../components/common/SectionHeading.jsx';
import './Gifts.css';

export default function Gifts() {
  return (
    <section id="gifts" className="gifts section-pad">
      <div className="section-shell">
        <Reveal>
          <SectionHeading kicker="Your presence is our present" title="A Note on Gifts" description="Your love and blessings are the greatest gift. Please do not feel obliged to bring anything." />
        </Reveal>
        
        
        
        
        
        
        
        <Reveal><div className="gift-symbol">♡</div><p className="gift-note">Your blessings and presence mean the world to us.</p></Reveal>
        
        
        
      </div>
    </section>
  );
}
