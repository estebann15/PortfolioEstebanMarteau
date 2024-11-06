import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={12} // Change ici pour prendre toute la largeur
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center", // Centrer verticalement
                            alignItems: "center", // Centrer horizontalement
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            <strong className="purple">Me connaitre</strong>
                        </h1>
                        <Aboutcard />
                    </Col>
                </Row>
                <h1 className="project-heading">
                    <strong className="purple">Langages </strong> de programmation
                </h1>

                <Techstack />

                <h1 className="project-heading">
                    <strong className="purple">Logiciels</strong> que je connais
                </h1>
                <Toolstack />

                <Github />
            </Container>
        </Container>
    );
}

export default About;
