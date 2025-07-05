import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ava_women.png"; 
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a 5th-semester Information Systems student at <b className="purple">University of Jember</b> with strong interest in <b className="purple">System Analysis</b>, <b className="purple">Fullstack Development</b>, and <b className="purple">Data Technology</b>.
              <br /><br />
              I’ve contributed to 4+ web application projects as a <b className="purple">Junior Fullstack Developer</b>, and served as a <b className="purple">System Analyst</b> with strong attention to detail in technical documentation, flow modeling, and requirement analysis.
              <br /><br />
              I also bring experience in handling datasets of 5,000+ entries and have been involved in AI research, while actively supporting organizational roles such as <i>Treasurer</i>, <i>Public Relations</i>, and <i>Researcher</i>.
            </p>

          </Col>


          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid rounded"
                alt="avatar"
                style={{ maxHeight: "300px", borderRadius: "10px" }}
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>LET'S STAY IN TOUCH</h1>
              <p>
                I'm always open to <span className="purple">connect</span> and collaborate
              </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/auliaPutri2006"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aulia-putri-maharani-700b562a6"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/au_lya06"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:auliaputribwi1997@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
