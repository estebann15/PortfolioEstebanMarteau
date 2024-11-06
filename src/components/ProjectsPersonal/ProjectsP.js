import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectPCard from "./ProjectPCards";
import Particle from "../Particle";
import mestats1 from "../../Assets/Projects/MESTATS.png";
import mestats12 from "../../Assets/Projects/MESTATS1.2.png";
import mestats2 from "../../Assets/Projects/MESTATS2.png";
import game1 from "../../Assets/Projects/game1.png";
import game2 from "../../Assets/Projects/game2.png";
import unity1 from "../../Assets/Projects/UNITY1.png";
import unity2 from "../../Assets/Projects/UNITY2.png";

function ProjectsPersonal() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    MES <strong className="purple">PROJETS PERSONNELS</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Ce  sont les projets sur lesquels je travail/j'ai travaillé dans mon temps libre
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {/* Project avec plusieurs images */}
                    <Col md={4} className="project-card">
                        <ProjectPCard
                            imgPaths={[mestats2, mestats12]}
                            isBlog={false}
                            title="Application perso"
                            description="A venir"
                        />
                    </Col>
                    {/* Un autre projet */}
                    <Col md={4} className="project-card">
                        <ProjectPCard
                            imgPaths={[mestats1]}  // Tu peux ajouter d'autres images ici
                            isBlog={false}
                            title="Site web perso"
                            description="A venir"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectPCard
                            imgPaths={[game1, game2]}  // Tu peux ajouter d'autres images ici
                            isBlog={false}
                            title="Jeu Pygame"
                            description="A venir"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectPCard
                            imgPaths={[unity1, unity2]}  // Tu peux ajouter d'autres images ici
                            isBlog={false}
                            title="Jeu UNITY 2D"
                            description="A venir"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ProjectsPersonal;
