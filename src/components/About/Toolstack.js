import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMicrosoftword,
  SiMicrosoftexcel,
  SiMicrosoftpowerpoint,
  SiVisualstudio,
  SiVisualstudiocode,
  SiGooglecolab,
  SiTrello,
  SiGit,
  SiCanva,
  SiFigma,
  SiGithub,
} from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { FaDrawPolygon } from "react-icons/fa";
import { MdArchitecture } from "react-icons/md";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Microsoft Word">
        <SiMicrosoftword />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Microsoft Excel">
        <SiMicrosoftexcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Microsoft PowerPoint">
        <SiMicrosoftpowerpoint />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="VS Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Google Colab">
        <SiGooglecolab />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Database Tools">
        <DiDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Trello">
        <SiTrello />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Enterprise Architecture">
        <MdArchitecture />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Draw.io">
        <FaDrawPolygon />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Canva">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Figma">
        <SiFigma />
      </Col>
    </Row>
  );
}

export default Toolstack;
