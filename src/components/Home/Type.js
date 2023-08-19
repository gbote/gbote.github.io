import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Dedicated Software Engineer",
          "Full Stack App Developer",
          "Data Scientist",
          "AI/ML Enthusiast",
          "Great Interest in LLMs",
          "Passionate CS Student",
          "Effective Technical Educator",
          "Human-Centered Engineer",
          "Strong Agile Communicator"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
