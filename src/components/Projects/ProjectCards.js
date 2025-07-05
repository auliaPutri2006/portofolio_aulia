import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards({ imgPath, title, description, tools }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>


        {tools && (
          <div style={{ marginTop: "15px" }}>
            {tools.map((tool, index) => (
              <Button
                key={index}
                variant="outline-light"
                size="sm"
                style={{
                  margin: "5px 5px 0 0",
                  backgroundColor: "#339bff",
                  border: "none",
                  color: "white",
                  fontSize: "0.8rem",
                }}
              >
                {tool.icon} {tool.name}
              </Button>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
