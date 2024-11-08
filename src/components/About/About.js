import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import pdf from "../../Assets/Adakulapally-Pavan-CV.pdf"; // Update to your resume path
import { AiOutlineDownload } from "react-icons/ai";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
            {/* View Resume Button */}
            <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
              <Col md={8} style={{ textAlign: "center" }}>
                <Button
                  variant="primary"
                  href={pdf}
                  target="_blank"
                  style={{
                    borderRadius: "50px",
                    padding: "10px 20px",
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#6c757d"; // Change color on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = ""; // Reset color
                  }}
                >
                  <AiOutlineDownload style={{ marginRight: "5px" }} />
                  View Resume
                </Button>
              </Col>
            </Row>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
