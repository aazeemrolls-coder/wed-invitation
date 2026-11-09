// import { useLayoutEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { Sparkles } from "lucide-react";
// import weddingData from "../../data/weddingData.js";
// import "./Opening.css";

// const sparkles = Array.from({ length: 52 }, (_, i) => ({
//   id: i,
//   left: `${(i * 37 + 11) % 100}%`,
//   top: `${(i * 61 + 7) % 100}%`,
//   delay: `${(i % 9) * -0.7}s`,
//   duration: `${3 + (i % 5)}s`,
//   size: `${2 + (i % 3)}px`,
// }));

// export default function Opening() {
//   const root = useRef(null);
//   const intro = useRef(null);
//   const leftCurtain = useRef(null);
//   const rightCurtain = useRef(null);
//   const names = useRef(null);
//   const [opened, setOpened] = useState(false);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.set([leftCurtain.current, rightCurtain.current], { xPercent: 0 });
//       gsap.set(names.current, { autoAlpha: 0, y: 25 });
//     }, root);
//     return () => ctx.revert();
//   }, []);

//   const revealInvitation = () => {
//     if (opened) return;
//     setOpened(true);
//     gsap
//       .timeline()
//       .to(intro.current, {
//         autoAlpha: 0,
//         scale: 1.05,
//         duration: 0.55,
//         ease: "power2.out",
//       })
//       .to(
//         leftCurtain.current,
//         { xPercent: -105, duration: 2.1, ease: "power4.inOut" },
//         0.25,
//       )
//       .to(
//         rightCurtain.current,
//         { xPercent: 105, duration: 2.1, ease: "power4.inOut" },
//         "<",
//       )
//       .to(
//         names.current,
//         { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out" },
//         "-=1.05",
//       );
//   };

//   return (
//     <section
//       className="opening"
//       ref={root}
//       aria-label="Wedding invitation opening"
//     >
//       <div className="opening__backdrop" />
//       <div className="opening__sparkles" aria-hidden="true">
//         {sparkles.map((s) => (
//           <span
//             key={s.id}
//             className="opening__sparkle"
//             style={{
//               left: s.left,
//               top: s.top,
//               animationDelay: s.delay,
//               animationDuration: s.duration,
//               width: s.size,
//               height: s.size,
//             }}
//           />
//         ))}
//       </div>
//       <div className="opening__stage">
//         <div className="opening__spotlight" />
//         <div className="opening__couple-art" aria-hidden="true">
//           <span className="opening__figure opening__figure--bride" />
//           <span className="opening__figure opening__figure--groom" />
//         </div>
//         <div
//           className="opening__curtain opening__curtain--left"
//           ref={leftCurtain}
//         >
//           <span className="opening__curtain-folds" />
//         </div>
//         <div
//           className="opening__curtain opening__curtain--right"
//           ref={rightCurtain}
//         >
//           <span className="opening__curtain-folds" />
//         </div>
//         <div className="opening__intro" ref={intro}>
//           <p className="opening__intro-kicker">
//             A little sparkle, a lifetime of love
//           </p>
//           <div className="opening__glitter">
//             <Sparkles size={42} strokeWidth={1} />
//             <span>✧</span>
//             <Sparkles size={25} strokeWidth={1} />
//           </div>
//           <h1>Blow on the glitter</h1>
//           <p className="opening__intro-note">And let the celebration begin</p>
//           <button
//             className="opening__reveal-button"
//             onClick={revealInvitation}
//             type="button"
//           >
//             Reveal invitation <span>✦</span>
//           </button>
//         </div>
//         <div className="opening__names" ref={names}>
//           <p className="opening__eyebrow">Together with their families</p>
//           <h2>
//             <span>{weddingData.bride.name}</span>
//             <i>&amp;</i>
//             <span>{weddingData.groom.name}</span>
//           </h2>
//           <p className="opening__message">
//             invite you to celebrate their wedding
//           </p>
//           <p className="opening__date">{weddingData.wedding.displayDate}</p>
//           <p className="opening__venue">{weddingData.wedding.venue}</p>
//           <a className="opening__continue" href="#hero">
//             Begin the celebration <span>↓</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Sparkles } from "lucide-react";
import weddingData from "../../data/weddingData.js";
import "./Opening.css";
// import coupleImage from "../../assets/images/Pinky Promise.png";

const sparkles = Array.from({ length: 75 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 61 + 7) % 100}%`,
  delay: `${(i % 9) * -0.7}s`,
  duration: `${3 + (i % 5)}s`,
  size: `${2 + (i % 3)}px`,
}));

export default function Opening() {
  const root = useRef(null);
  const intro = useRef(null);
  const leftCurtain = useRef(null);
  const rightCurtain = useRef(null);
  const spotlight = useRef(null);
  const couple = useRef(null);
  const names = useRef(null);
  const [opened, setOpened] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([leftCurtain.current, rightCurtain.current], {
        xPercent: 0,
      });

      gsap.set(intro.current, { autoAlpha: 1 });
      gsap.set(spotlight.current, { autoAlpha: 0, scale: 0.7 });
      gsap.set(couple.current, { autoAlpha: 0, y: 35 });
      gsap.set(names.current, { autoAlpha: 0, y: 30 });
    }, root);

    return () => ctx.revert();
  }, []);

  const revealInvitation = () => {
    if (opened) return;

    setOpened(true);

    const tl = gsap.timeline();

    tl.to(intro.current, {
      autoAlpha: 0,
      scale: 1.08,
      duration: 0.65,
      ease: "power2.inOut",
    })
      .to(
        [leftCurtain.current, rightCurtain.current],
        {
          xPercent: (index) => (index === 0 ? -105 : 105),
          duration: 2.5,
          ease: "power4.inOut",
        },
        "-=0.1",
      )
      .to(
        spotlight.current,
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1.6,
          ease: "power2.out",
        },
        "-=1.5",
      )
      .to(
        couple.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1.1",
      )
      .to(
        names.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1.1",
      );
  };

  return (
    <section
      className="opening"
      ref={root}
      aria-label="Wedding invitation opening"
    >
      <div className="opening__backdrop" />

      <div className="opening__sparkles" aria-hidden="true">
        {sparkles.map((s) => (
          <span
            key={s.id}
            className="opening__sparkle"
            style={{
              left: s.left,
              top: s.top,
              animationDelay: s.delay,
              animationDuration: s.duration,
              width: s.size,
              height: s.size,
            }}
          />
        ))}
      </div>

      <div className="opening__stage">
        <div className="opening__spotlight" ref={spotlight} />

        {/* Couple artwork */}
        {/* <div className="opening__couple" ref={couple}>
          <div className="opening__couple-glow" />
          <img
            src={coupleImage}
            alt="Bride and groom"
            className="opening__couple-image"
          />
        </div> */}

        {/* Velvet curtains */}
        <div
          className="opening__curtain opening__curtain--left"
          ref={leftCurtain}
        >
          <span className="opening__curtain-folds" />
        </div>

        <div
          className="opening__curtain opening__curtain--right"
          ref={rightCurtain}
        >
          <span className="opening__curtain-folds" />
        </div>

        {/* Intro screen */}
        <div className="opening__intro" ref={intro}>
          <p className="opening__intro-kicker">
            A little sparkle, a lifetime of love
          </p>

          <div className="opening__glitter">
            <Sparkles size={42} strokeWidth={1} />
            <span>✧</span>
            <Sparkles size={25} strokeWidth={1} />
          </div>

          <h1>Blow on the glitter</h1>

          <p className="opening__intro-note">And let the celebration begin</p>

          <button
            className="opening__reveal-button"
            onClick={revealInvitation}
            type="button"
            disabled={opened}
          >
            Reveal invitation <span>✦</span>
          </button>
        </div>

        {/* Wedding names and details */}
        <div className="opening__names" ref={names}>
          <p className="opening__eyebrow">Together with their families</p>

          <h2>
            <span>{weddingData.groom.name}</span>
            <i>&amp;</i>
            <span>{weddingData.bride.name}</span>
          </h2>

          <p className="opening__message">
            invite you to celebrate their wedding
          </p>

          <p className="opening__date">{weddingData.wedding.displayDate}</p>

          <p className="opening__venue">{weddingData.wedding.venue}</p>

          <p className="opening__address">{weddingData.wedding.address}</p>

          <a className="opening__continue" href="#hero">
            Begin the celebration <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
