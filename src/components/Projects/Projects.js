import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Knn from "../../Assets/Projects/KNN.png";
import Sentiment from "../../Assets/Projects/SentimentAnalysis.jpeg";
import Ads from "../../Assets/Projects/AdMgmtSystem.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sentiment}
              title="Twitter Sentiment Analysis"
              description="Created a sentiment analysis application by extracting data from twitter and classify the tweets into positive, negative and neutral sentiments of the products by using python with Jupyter notebook, R for visualization, NLTK library for importing required libraries."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ads}
              title="Advertising Agency Management System"
              description="The aim of the project to create and managing a data repository of the Adding Agency System of an organization. It is involved in the process of advertising planning, internal and external to advertising agency."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Knn}
              title="K-Nearest Neighbor Classification"
              description="Developed an application focusing on solving the classification problem over encrypted data. The model ‘secure k-NN classifier over encrypted data in the cloud’ protects the confidentiality of data, privacy of user’s input query, and hides the data access patterns."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
