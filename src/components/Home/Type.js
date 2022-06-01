import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Software Engineer",
          "Data Scientist",
          "Passionate CS Student",
          "Effective Technical Educator",
          "Social Activist & Philanthropist"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
