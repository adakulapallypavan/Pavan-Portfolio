import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
  DiJava,
  DiPython,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";
import "./Techstack.css"; // Add this CSS file for custom styling

function Techstack() {
  const techs = [
    { icon: <CgCPlusPlus />, label: "C++" },
    { icon: <DiHtml5 />, label: "HTML" },
    { icon: <DiCss3 />, label: "CSS" },
    { icon: <DiJavascript1 />, label: "JavaScript" },
    { icon: <DiReact />, label: "React.js" },
    { icon: <DiNodejs />, label: "Node.js" },
    { icon: <SiExpress />, label: "Express.js" },
    { icon: <DiMongodb />, label: "MongoDB" },
    { icon: <DiGit />, label: "Git" },
    { icon: <DiPython />, label: "Python" },
    { icon: null, label: "OOPs" }, // Text-only entries
    { icon: null, label: "DBMS" },
    { icon: null, label: "Data Structures & Algorithms" },
  ];

  return (
    <Row className="techstack-container" style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col key={index} xs={6} md={3} className="tech-box">
          {tech.icon && <div className="tech-icon">{tech.icon}</div>}
          <p className="tech-label">{tech.label}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
