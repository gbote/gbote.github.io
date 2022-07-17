import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming when I was 15 years old starting with <b className="purple"> Java</b>, 
              and ever since then, I found a knack for coding for projects that helped me develop more refined <b className="purple">problem solving skills.</b>
              <br />
              <br />
              Specifically, I became more passionate for projects that <b className="purple">make resources more accessible</b> and <b className="purple">advocate social justice.</b>
              <br />
              <br />As I grew older and decided to experiment with more programming languages, I became more fluent in classics like
                <b className="purple"> C, C++, Javascript, and Python. </b>
              <br />
              <br />
              My field of interests are building new &nbsp;
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Artificial Intelligence and Machine Learning. 
                </b> I have also dabbled in <b className="purple">
                  Data Science
                </b> by trying to find interesting trends in recent datasets via <b className="purple">
                  R.
                </b>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              &nbsp;like
                <b className="purple"> React.js, jQuery, and p5.js.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON:</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/gbote"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/tweetgerardob"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gerardo-rafael-bote/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/instagerardob/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="purple">connect </span>with me above!
              </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
