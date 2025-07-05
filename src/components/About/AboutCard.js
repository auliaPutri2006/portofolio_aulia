import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Aulia Putri Maharani</span>, a passionate <b className="purple">Fullstack Developer</b> and <b className="purple">System Analyst</b> with proven experience building impactful solutions.
            <br /><br />
            🎯 I’ve developed <b>3+ real-world web apps</b> and led system analysis for <b>3+ tech projects</b>, writing over <b>4,000 lines of code</b> in PHP (Laravel), JavaScript, Python, and C#. My strength lies in transforming business goals into smart, efficient systems.
            <br /><br />
            💼 Currently, I work as a <b className="purple">Laboratory Assistant</b> at the AI Lab of University of Jember, supporting data science research and AI model experimentation.
            <br /><br />
            🧠 With a sharp eye for detail, I take pride in clean code, logical system flows, and user-centered design. I’ve also dived into <b className="purple">Blockchain Development</b> by building smart contracts using Solidity.
            <br /><br />
            🏆 One of my proudest moments? Co-leading a digital business project that earned a <b className="purple">15 million IDR grant</b> from the Ministry of Education (P2MW 2023).
            <br /><br />
            🤝 My leadership journey includes roles as <b>Public Relations Officer, CFO, and Event Coordinator</b>, sharpening my skills in <b>communication, time management, and cross-functional teamwork</b>.
            <br /><br />
            I’m actively seeking opportunities where I can grow, build impactful systems, and contribute to a team that values <b className="purple">clarity, curiosity, and collaboration</b>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>

  );
}

export default AboutCard;
