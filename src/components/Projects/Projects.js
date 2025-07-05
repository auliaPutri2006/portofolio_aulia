import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import neura from "../../Assets/Projects/neura_web.svg";
import simobi from "../../Assets/Projects/simobi2.svg";
import knn from "../../Assets/Projects/knn.png";
import megamin from "../../Assets/Projects/megamin.png";
import simawar from "../../Assets/Projects/simawar.png";
import project_storease from "../../Assets/Projects/project_storease.png";

import { FaPython, FaPhp } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiChartdotjs,
  SiLaravel
} from "react-icons/si";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neura}
              title="Neura – Psychometric Platform"
              description="Psychometric web app for students to assess learning style & motivation. Developed as System Analyst & Fullstack Developer. Features role-based access, dashboards, and longitudinal assessment."
              tools={[
                { icon: <SiLaravel />, name: "Laravel 10" },
                { icon: <SiTailwindcss />, name: "Tailwind CSS" },
                { icon: "🟨", name: "JavaScript" },
                { icon: <SiMysql />, name: "MySQL" },
                { icon: <SiChartdotjs />, name: "Chart.js" },
                { icon: <FaPhp />, name: "PHP" }
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simobi}
              title="SIMOBI – Duck Hatchery Management System"
              description="Digitized traditional hatchery business operations into a centralized system. As System Analyst, I designed core modules (breeding, stock, finance), conducted field interviews, and mapped measurable business impacts like 40% reduction in hatching failure and faster decision-making through dashboards"
              tools={[
                { icon: "📐", name: "Enterprise Architect" },
                { icon: "🧩", name: "Agile Scrum" },
                { icon: "🖌️", name: "Figma" },
                { icon: "🧭", name: "yEd" }
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={knn}
              title="Model Predictions Using Physiological and Behavioral Data"
              description="Developed a learning success prediction model using KNN with 97%+ accuracy. Processed 10,000+ behavioral and physiological data entries using Python and implemented data preprocessing to build adaptive learning support system."
              tools={[
                { icon: <FaPython />, name: "Python" },
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={megamin}
              title="Vegetable Store Desktop Application"
              description="Built a C# desktop app for vegetable store inventory and transactions. Applied OOP, wrote 3,000+ lines of code, and automated stock & sales management to double operational speed."
              tools={[
                { icon: "🖥️", name: "C#" },
                { icon: "🔄", name: "OOP" }
              ]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simawar}
              title="Si Mawar – Goat Milk Management Platform"
              description="Designed a web-based goat milk business platform as System Analyst. Defined core user features (login, dashboard, smart contracts), modeled business processes, and projected 46.6% profit growth by digitizing manual workflows."
              tools={[
                { icon: "📐", name: "UML" },
                { icon: "🧩", name: "Agile Scrum" },
                { icon: "🖌️", name: "Figma" },
                { icon: "🧭", name: "yEd" }
              ]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project_storease}
              title="StorEase – Wedding Tech Platform"
              description="Managed finances as CFO for a wedding tech platform integrating AI and VR. Secured IDR 15M funding, onboarded 20+ vendor partners, and led offline promotions attracting 100+ leads."
              tools= {[
                { icon: "💰", name: "Financial Planning" },
                { icon: "📄", name: "Proposal Writing" },
                { icon: "📊", name: "Budgeting & Reporting" },
              ]}
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
