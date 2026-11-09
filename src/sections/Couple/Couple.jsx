import Reveal from "../../components/common/Reveal.jsx";
import SectionHeading from "../../components/common/SectionHeading.jsx";
import weddingData from "../../data/weddingData.js";
import "./Couple.css";

export default function Couple() {
  return (
    <section id="couple" className="couple-section section-pad">
      <div className="section-shell couple-shell">
        <Reveal>
          <SectionHeading
            kicker="A little bit about us"
            title="The Couple"
            description="Two stories became one, and now we'd love you to be part of our next chapter."
          />
        </Reveal>

        <div className="couple-grid">
          {/* Groom */}
          <Reveal>
            <article className="couple-card">
              <div className="portrait-placeholder">
                {weddingData.groom.image && (
                  <img
                    src={weddingData.groom.image}
                    alt={weddingData.groom.name}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
              </div>

              <h3>{weddingData.groom.name}</h3>
              {/* <p>{weddingData.groom.parents}</p> */}
            </article>
          </Reveal>

          {/* Bride */}
          <Reveal delay={0.15}>
            <article className="couple-card">
              <div className="portrait-placeholder">
                {weddingData.bride.image && (
                  <img
                    src={weddingData.bride.image}
                    alt={weddingData.bride.name}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
              </div>

              <h3>{weddingData.bride.name}</h3>
              {/* <p>{weddingData.bride.parents}</p> */}
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// import Reveal from "../../components/common/Reveal.jsx";
// import SectionHeading from "../../components/common/SectionHeading.jsx";
// import weddingData from "../../data/weddingData.js";
// import "./Couple.css";
// export default function Couple() {
//   return (
//     <section id="couple" className="couple-section section-pad">
//       <div className="section-shell">
//         <Reveal>
//           <SectionHeading
//             kicker="A little bit about us"
//             title="The Couple"
//             description="Two stories became one, and now we'd love you to be part of our next chapter."
//           />
//         </Reveal>
//         <div className="couple-grid">
//           <Reveal>
//             <article className="couple-card">
//               <div className="portrait-placeholder">
//                 {weddingData.groom.image ? (
//                   <img
//                     src={weddingData.groom.image}
//                     alt={weddingData.groom.name}
//                     onError={(e) => {
//                       e.currentTarget.style.display = "none";
//                     }}
//                   />
//                 ) : (
//                   "Groom portrait"
//                 )}
//               </div>
//               <h3>{weddingData.groom.name}</h3>
//               <p>{weddingData.groom.parents}</p>
//             </article>
//           </Reveal>
//           <Reveal delay={0.15}>
//             <article className="couple-card">
//               <div className="portrait-placeholder">
//                 <img
//                   src={weddingData.bride.image}
//                   alt={weddingData.bride.name}
//                   onError={(e) => {
//                     e.currentTarget.style.display = "none";
//                   }}
//                 />
//               </div>
//               <h3>{weddingData.bride.name}</h3>
//               <p>{weddingData.bride.parents}</p>
//             </article>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }
