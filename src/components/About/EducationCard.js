import React from "react";
import Card from "react-bootstrap/Card";

function EducationCard({ icon, title, degree, date, gpa, description }) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ fontSize: "1.3em" }}>
          {icon} &nbsp; <b>{title}</b>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{degree}</Card.Subtitle>
        <Card.Text style={{ marginBottom: "5px" }}><b>📆</b> {date}</Card.Text>
        <Card.Text><b>📌 GPA:</b> {gpa}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EducationCard;
