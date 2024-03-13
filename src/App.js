import React, { useState, useEffect } from "react";
import './App.css';
import GlitchText from './GlitchText'; // Import the GlitchText component

const sentences = [
  'Hello buddy :)',
  'How are you today?',
  'How did you find me?',
];

function App() {
  const [currentSentence, setCurrentSentence] = useState(0);

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
      <div className="App">
        {/* Display the current sentence using GlitchText */}
        <p key={currentSentence} className="message">
          <GlitchText text={sentences[currentSentence]}/>
        </p>
      </div>
  );
}

export default App;