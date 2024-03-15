import React, { useState, useEffect } from "react";
import { useGlitch } from "react-powerglitch"; // Import the useGlitch hook

const sentences = [
  "Hello buddy :)",
  "How are you today?",
  "How did you find me?",
];

function App() {
  const [currentSentence, setCurrentSentence] = useState(0);
  const glitch = useGlitch(); // Call useGlitch to control glitch effect

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Update currentSentence state
      setCurrentSentence((prevSentence) => {
        const nextSentence = (prevSentence + 1) % sentences.length;

        // Reset to first sentence if the last one was displayed
        if (nextSentence === 0) {
          return 0;
        }

        return nextSentence;
      });
    }, 3000);

    // Clear timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, [currentSentence]); // Dependency ensures re-render on state change

  return (
      <div className="App" style={{ backgroundColor: "black", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        {/* Display the current sentence with glitch effect */}
        <p key={currentSentence} className="message" style={{ fontSize: "48px", color: "white" }}>
        <span ref={glitch.ref}>
          {sentences[currentSentence]}
        </span>
        </p>
      </div>
  );
}

export default App;
