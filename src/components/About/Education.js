import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCard";
import Particle from "../Particle";

function Education() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Education</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <EducationCard
              icon="🎓"
              title="University of Jember"
              degree="Information Systems"
              date="Aug 2023 - Aug 2026"
              gpa="3.93"
              description="Currently pursuing a Bachelor's in Information Systems. Passionate about system analysis, fullstack development, and AI. Serving as AI Lab Assistant and CFO of digital tech projects with national-level funding."
            />
          </Col>
          <Col md={4} className="project-card">
            <EducationCard
              icon="🏫"
              title="SMAN 1 Purwoharjo"
              degree="Science (IPA)"
              date="Jul 2021 - Mar 2023"
              gpa="94"
              description="📚 Completed an accelerated 2-year program,
                🏅 Ranked Top 3 in Science 
                💰 Served as Treasurer in OSIS
                🥇 Gold Medal at National Islamic Competition (Liga Olimpiade)

                "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
