import React, { useState, useEffect } from "react";
import './glitchText.css';

const GlitchText = ({ text }) => {
    const [glitchText, setGlitchedText] = useState(text);
    const [glitchInterval, setGlitchInterval] = useState(null);

    useEffect(() => {
        const startGlitchAnimation = () => {
            const intervalId = setInterval(() => {
                setGlitchedText(glitchText => {
                    const newText = glitchText.split('');
                    for (let i = 0; i < newText.length; i++) {
                        if (Math.random() < 0.2) {
                            newText[i] = getRandomChar(newText[i]);
                        }
                    }
                    return newText.join('');
                });
            }, 50);
            setGlitchInterval(intervalId);
        };

        const stopGlitchAnimation = () => {
            if (glitchInterval) {
                clearInterval(glitchInterval);
                setGlitchedText(text);
            }
        };

        startGlitchAnimation();

        return () => {
            stopGlitchAnimation()
        };
    }, []);

    return (
        <span className="glitch-text">{glitchText}</span>
    );
};

const getRandomChar = (char) => {
    const charMap = {
        'a': ['a', 'ä', 'å', 'æ'],
        'e': ['e', 'é', 'è', 'ê'],
        'i': ['i', 'í', 'ì', 'ï'],
        'o': ['o', 'ó', 'ò', 'ö'],
        'u': ['u', 'ú', 'ù', 'ü'],
        ' ': [' '],
    };
    if (charMap[char]) {
        return charMap[char][Math.floor(Math.random() * charMap[char].length)];
    }
    return char;
};

export default GlitchText;