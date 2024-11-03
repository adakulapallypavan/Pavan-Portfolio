import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png"; // Replaced bitsOfCode with emotion
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";

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
              imgPath={chatify}
              title="Ecommerce Website | MERN Stack"
              description="An innovative E-Commerce platform with product filters, dynamic suggestions, and pre-payment signup for an enhanced user experience. Includes secure Braintree payment integration."
              ghLink="https://github.com/adakulapallypavan/ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion} // Using emotion image as a replacement
              title="Movies Review Platform | MERN Stack"
              description="A movie review application with user authentication, review submissions, movie search filters, and an admin dashboard. Built for streamlined movie recommendations."
              ghLink="https://github.com/adakulapallypavan/MERN-MOVIES-APP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Student Management System | MySQL, Python"
              description="A CRUD application to manage student info, course data, and transactions. Uses MySQL for data storage and Python for backend functions."
              ghLink="https://github.com/adakulapallypavan/Student-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              title="Employee Data Management App | MERN Stack"
              description="An employee management system for efficient CRUD operations on employee records, using the MERN stack for a streamlined, user-friendly experience."
              ghLink="https://github.com/adakulapallypavan/Employee-Data-Management-App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
