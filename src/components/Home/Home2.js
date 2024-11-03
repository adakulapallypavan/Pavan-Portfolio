import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg"; // Update this with your avatar image path
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              I am <span className="purple">Adakulapally Pavan</span>, a MERN Stack Developer with hands-on experience in building dynamic and scalable web applications.
              <br />
              <br />
              My passion for Full Stack Development is not only reflected in my  experience but also in the enthusiasm and dedication I bring to each project.              <br />
              <br />
              I have developed a range of projects, including an <span className="purple">E-Commerce Platform</span> with advanced features, a <span className="purple">Movies Review App</span> with secure user authentication,<span className="purple">a efficient Employee Management system.</span> and moreduring my internship at solar secure solutions.
              <br />
              <br />
              My expertise in data structures and problem-solving is reinforced by over <span className="purple">400 challenges solved on LeetCode</span> with high accuracy. I’m excited to bring my dedication and technical skills to impactful projects and collaborate with forward-thinking teams.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              I'm always open to discussing <span className="purple">new opportunities</span> and collaborations.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/adakulapallypavan" // Update with your GitHub URL
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/your-twitter-handle" // Update with your Twitter URL
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/your-linkedin-username/" // Update with your LinkedIn URL
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/your-instagram-handle" // Update with your Instagram URL
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
