import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard"; 
import Particle from "../Particle";
import itc from "../../Assets/Experience/itc.png";
import gathering from "../../Assets/Experience/gathering.png";
import storease from "../../Assets/Experience/P2MW.jpg";
import kmi from "../../Assets/Experience/storease.jpg";
import SSI from "../../Assets/Experience/SSI.png";
import linux from "../../Assets/Experience/LINUX.jpg";
import WCS from "../../Assets/Experience/wcs.png";




function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experiences & Achievements</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the roles and contributions I've been involved in.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={itc}
              title="Treasurer - ITC 2024"
              description="Managed over IDR 15M in funds and registration fees for 60+ teams in a national tech competition. Designed financial plans that helped secure 30+ partnerships and 3 sponsors."
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={gathering}
              title="Public Relations - Gathering 2024"
              description="Created 50+ promotional broadcasts, coordinated 100+ participants, served as moderator during the event, and maintained external relations with guests and alumni."
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={storease}
              title="Awardee of P2MW 2024 – Kemendikbudristek"
              description="Received IDR 15M seed funding for StorEase, a digital wedding platform, under the national P2MW program. Selected among top student startups to advance early-stage business development."
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={kmi}
              title="National Finalist- KMI EXPO 2024 at Kendari"
              description="Represented University of Jember with StorEase at a national entrepreneurship showcase by Kemendikbudristek. Joined 100+ top student ventures in pitching and exhibition"
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              imgPath={SSI}
              title="Public Relations - SSI 2024"
              description="Managed 20+ social media posts, coordinated 50+ broadcasts, and served as liaison for 15+ external guests including professors and influencers, while supporting 90+ internal participants."
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
                imgPath={linux}
                title="Event Staff - LINUX 2025"
                description="Served as MC and event planner for an online tech event with 120+ participants. Coordinated rundown flow, ensured time alignment, and helped resolve live execution issues for successful delivery."
            />
            </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
                imgPath={WCS}
                title="Co-Coordinator of Secretariat & Digital Business Mentor – Welcoming Session 2024"
                description="Managed attendance and data for 100+ new students. Mentored 2 teams in digital business, both winning top 3 out of 20+ participants in the internal competition."
            />
            </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;

