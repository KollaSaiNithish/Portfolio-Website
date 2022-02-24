import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">

              <h1 className="heading-name">
                <strong className="main-name"> NITHISH KOLLA</strong>
              </h1>

              <h2 style={{ paddingLeft: 50, paddingTop: 30, textAlign: "left" }}>
                Web Developer
              </h2>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
