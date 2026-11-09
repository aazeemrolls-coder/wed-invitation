import Reveal from '../../components/common/Reveal.jsx';
import SectionHeading from '../../components/common/SectionHeading.jsx';
import './DressCode.css';

export default function DressCode() {
  return (
    <section id="dresscode" className="dresscode section-pad">
      <div className="section-shell">
        <Reveal>
          <SectionHeading kicker="A touch of festive elegance" title="Dress Code" description="Wear something you feel wonderful in. We would love to see you celebrate in style." />
        </Reveal>
        
        
        
        
        
        
        <Reveal><div className="dress-swatches"><span style={{ background: '#5b0b20' }}></span><span style={{ background: '#d7b98c' }}></span><span style={{ background: '#e8d9c7' }}></span><span style={{ background: '#7b8060' }}></span></div><p className="dress-note">Festive · Elegant · Comfortable</p></Reveal>
        
        
        
        
      </div>
    </section>
  );
}
