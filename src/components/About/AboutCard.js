import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            For those reading, welcome! I am <span className="purple">Gerardo Rafael Bote </span>
            from <span className="purple"> Houston, Texas.</span>
            <br />I am a junior pursuing a Bachelor of Science in Computer Science from 
            <span className="orange"> The University of Texas at Austin.</span> I am also pursing a minor in Business and a certificate
            in Computational Science &amp; Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Nintendo Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening and Dancing to K-Pop 🕺
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling the World 🌏
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations."{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
