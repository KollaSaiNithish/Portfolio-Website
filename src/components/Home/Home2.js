import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about-icon.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h2 style={{ fontSize: "2.6em" }}>
              <span className="purple"> ABOUT ME </span>
            </h2>
            <p className="home-about-body">
              <b>
              Hello, My name is Nithish Kolla. I am a full stack web developer specialized in developing scalable and efficient web apps.
              </b>
              <br />
              <br />
              <b>
              With a strong emphasis on "Progressive Enhancement", I look for creative ways to develop a web application without compromising on browser support and performance.
              </b> 
              <br />
              <br />
              <b>
              Having experience of building applications with HTML, CSS, Node JS, Javascript Frameworks - React, Angular and some other libraries.
              </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
