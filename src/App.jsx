// // import WeddingInvitation from './pages/WeddingInvitation.jsx';

// // export default function App() {
// //   return <WeddingInvitation />;
// // }
// import { useEffect, useState } from "react";
// import Invitation from "./sections/Invitation/Invitation";
// import Opening from "./sections/Opening/Opening";

// import Couple from "./sections/Couple/Couple";
// import SaveTheDate from "./sections/SaveTheDate/SaveTheDate";
// import Venue from "./sections/Venue/Venue";
// import Countdown from "./sections/Countdown/Countdown";
// import MusicPlayer from "./components/common/MusicPlayer";


// function App() {
//   const [revealed, setRevealed] = useState(false);

//   useEffect(() => {
//     // Lock scroll before the invitation is revealed
//     document.body.style.overflow = revealed ? "auto" : "hidden";

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [revealed]);

//   const handleReveal = () => {
//     setRevealed(true);

//     // Make sure the new invitation starts from the top
//     window.scrollTo(0, 0);
//   };

//   return (
//     <>
//       {!revealed ? (
//         <Opening onReveal={handleReveal} />
//       ) : (
//         <>
//           <Invitation />
//           <Couple />
//           <SaveTheDate />
//           <Venue />
//           <Countdown />
//           <MusicPlayer />
//         </>
//       )}
//     </>
//   );
// }

// export default App;



import { useEffect, useState } from "react";
import Invitation from "./sections/Invitation/Invitation";
import Opening from "./sections/Opening/Opening";
import Couple from "./sections/Couple/Couple";
import SaveTheDate from "./sections/SaveTheDate/SaveTheDate";
import Venue from "./sections/Venue/Venue";
import Countdown from "./sections/Countdown/Countdown";
import MusicPlayer from "./components/common/MusicPlayer";

function App() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = revealed ? "auto" : "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [revealed]);

  return (
    <>
      <Opening onReveal={() => setRevealed(true)} />

      {revealed && (
        <>
          {/* <Couple /> */}
          <Invitation />
          <SaveTheDate />
          <Venue />
          <Countdown />
        </>
      )}

      <MusicPlayer />
    </>
  );
}

export default App;