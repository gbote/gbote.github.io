import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Software Engineer",
          "Data Scientist",
          "AI/ML Enthusiast",
          "Passionate CS Student",
          "Effective Technical Educator",
          "Human-Centered Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
