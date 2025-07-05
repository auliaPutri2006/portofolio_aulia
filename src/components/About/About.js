
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Education from "./Education";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={10}
            style={{
              justifyContent: "center",
              paddingTop: "40px",
              paddingBottom: "30px",
            }}
          >
            <h2 className="heading">
              A LITTLE BIT ABOUT <span className="purple">ME</span>
            </h2>
            <Aboutcard />
            <Education/>  
          </Col>
        </Row>

        <hr style={{ borderColor: "#6c63ff", margin: "50px 0" }} />




        <h2 className="project-heading text-center">
          My <span className="purple">Technical Skillset</span>
        </h2>
        <p className="text-center" style={{ marginBottom: "30px" }}>
          Technologies I've used for projects and research
        </p>
        <Techstack />

        <h2 className="project-heading text-center" style={{ marginTop: "60px" }}>
          Favorite <span className="purple">Tools</span>
        </h2>
        <p className="text-center" style={{ marginBottom: "30px" }}>
          Tools that support my workflow and creativity
        </p>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
