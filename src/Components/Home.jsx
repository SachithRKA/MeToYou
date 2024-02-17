import React, { useRef, useState, useEffect } from "react";
import Scrambler from "scrambling-text";

function Home() {
    const appName = "MeToYou";
    const descriptions = [
        `${appName} invites you to share experiences, stories, and moments with friends, family, and communities around the globe. Dive into personal connections and global conversations with our intuitive chat interface, where every interaction feels like a face-to-face meeting. Join us and embark on a journey of connecting, expressing, and exploring life through the lens of social media.`,
    ];

    const [scrambledText, setScrambledText] = useState(descriptions[0]);
    const scrambleRef = useRef(new Scrambler());

    useEffect(() => {
        scrambleRef.current.scramble(scrambledText, setScrambledText);
    }, []);

    return (
        <div className="home">
            <p className="title">Let's <span className="title-span">Connect</span> with each other</p>
            <p className="description">{scrambledText}</p>
            <button className="home-button">Get Started</button>
        </div>
    );
}

export default Home;
