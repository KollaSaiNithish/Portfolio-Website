import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/skills.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">WHAT I DO</strong>
            </h1>
            <p style={{fontSize: 20}}>Things I'm skilled at and passionate about</p>
          </Col>
        </Row>
        <img src={laptopImg} alt="about" className="img-fluid" />
        <Row>

        </Row>
      </Container>
    </Container>
  );
}

export default About;
