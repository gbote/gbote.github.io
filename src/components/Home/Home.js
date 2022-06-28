import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10, textAlign: "left" }} className="heading">
              Hello There!{""}
                <span className="wave" role="img" aria-labelledby="wave">
                👋
                </span>
              </h1>

              <h1 className="heading-name">
                My name is
                <strong className="main-name"> GERARDO RAFAEL BOTE</strong>
                .
              </h1>

              <div className="custom-typewriter">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 5 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
