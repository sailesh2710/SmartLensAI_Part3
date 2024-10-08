// src/components/About.js
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <section id="About" className="about-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg"
              fluid
              rounded
              className="shadow-lg"
            />
          </Col>
          <Col lg={6}>
            <h2 className="display-4 mb-4">About Our Company</h2>
            <p className="lead mb-4">
              SmartLens AI is a technology startup that delivers AI-powered
              computer vision solutions tailored specifically for the retail
              industry. The company’s mission is to revolutionize in-store
              experiences, improve operational efficiency, and enhance customer
              satisfaction through advanced visual analytics and AI automation.
            </p>
          </Col>
        </Row>

        <Row className="mt-5 pt-5">
          <Col md={4} className="mb-4">
            <Image
              src="https://cdn4.iconfinder.com/data/icons/bussiness-finance-1/32/Business__finance_Target_Arrow-512.png"
              fluid
              rounded
              className="shadow mb-3"
              width="350"
              height="300"
            />
            <h4>Our Mission</h4>
            <p>
              To empower businesses with cutting-edge solutions that drive
              growth and success.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/3309/3309985.png"
              fluid
              rounded
              className="shadow mb-3"
              width="350"
              height="300"
            />
            <h4>Our Vision</h4>
            <p>
              To be the global leader in innovative technology solutions,
              shaping the future of industries.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/009/487/266/original/company-values-icon-style-vector.jpg"
              fluid
              rounded
              className="shadow mb-3"
              width="350"
              height="300"
            />
            <h4>Our Values</h4>
            <p>
              Integrity, innovation, collaboration, and customer-centricity
              guide everything we do.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
