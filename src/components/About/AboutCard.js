import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Adakulapally Pavan</span> from
            <span className="purple"> India.</span>
            <br />
            I am a full-stack developer and an NIT Warangal graduate with hands-on experience in
            React.js, Node.js, Express.js, MongoDB, and more.
            <br />
            During my internship at Solar Secure Solutions, I contributed to
            building responsive, dynamic web applications using Agile methodologies.
            <br />
            <br />
            Recently, I developed an E-Commerce platform with advanced features like product filters,
            recommendations, and secure payments. I also built a Movies Review Platform with secure
            user authentication and an Employee Management App for efficient CRUD operations.
            <br />
            <br />
            With a strong foundation in data structures, algorithms, and C++, I have solved over 200
            challenges on LeetCode with a 95% accuracy rate.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving Coding Challenges
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness Activities (Former Additional Secretary of NITW Fitness Club)
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Kho Kho and Volleyball
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Excited to build impactful solutions and collaborate with like-minded professionals!"
          </p>
          <footer className="blockquote-footer">Adakulapally Pavan</footer>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
