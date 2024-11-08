import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myPhoto from "../../Assets/my-photo.jpg"; // Correct file path
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import About from "../About/About"; // Adjust if the About component is inside another folder

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ADAKULAPALLY PAVAN </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={myPhoto} // Your image file
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  borderRadius: "50%", // Circular cropping
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
                  border: "3px solid  #000000", // Optional white border
                  objectFit: "cover", // Ensures image covers the rounded shape
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      {/* <About /> */}
    </section>
  );
}

export default Home;
