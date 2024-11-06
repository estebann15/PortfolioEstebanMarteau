import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dogbreed from "../../Assets/Projects/DOGBREED.png";
import dogbreed2 from "../../Assets/Projects/dogbreed2.png";
import dogbreed3 from "../../Assets/Projects/dogbreed3.png";
import chaos from "../../Assets/Projects/Chaos.png";
import pendulum2 from "../../Assets/Projects/pendulum2.png";
import pendulum3 from "../../Assets/Projects/pendulum3.png";
import ensemMap from "../../Assets/Projects/ENSEMMAP.png";
import ensemMap2 from "../../Assets/Projects/ENSEMMAP2.png";
import twizzy from "../../Assets/Projects/TWIZZY.png";
import separation from "../../Assets/Projects/MachineLearning2.png";
import pacman from "../../Assets/Projects/PACMAN.jpg";
import robot1 from "../../Assets/Projects/ROBOT1.png";
import robotic12 from "../../Assets/Projects/robotic1.2.png";
import robotic13 from "../../Assets/Projects/robotic1.3.png";
import robotic14 from "../../Assets/Projects/robotic1.4.png";
import robot2 from "../../Assets/Projects/ROBOT2.png";
import robotic22 from "../../Assets/Projects/robotic2.2.png";
import robotic23 from "../../Assets/Projects/robotic2.3.png";
import sami from "../../Assets/Projects/SAMI.png";
import sami1 from "../../Assets/Projects/SAMI1.png";
import sami2 from "../../Assets/Projects/SAMI2.png";
import stage11 from "../../Assets/Projects/Stage11.png";
import stage1 from "../../Assets/Projects/Stage1.png";
import perona11 from "../../Assets/Projects/perona1.1.png";
import perona1 from "../../Assets/Projects/perona1.png";
import perona2 from "../../Assets/Projects/perona2.png";
import comet1 from "../../Assets/Projects/COMET1.png";
import comet2 from "../../Assets/Projects/COMET2.png";
import comet3 from "../../Assets/Projects/COMET3.png";


function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    MES <strong className="purple">PROJETS SCOLAIRES </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Ce sont certains des projets que j'ai pu faire durant mes études
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[comet1,comet2,comet3]}  // Plusieurs images
                            isBlog={false}
                            title="Outil d'automatisation de la couverture de modèle d'un pilote automatique"
                            description="A venir"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[stage1,stage11]}  // Plusieurs images
                            isBlog={false}
                            title="Projet Stage découverte ingénieur"
                            description="A venir"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[ensemMap,ensemMap2]}  // Plusieurs images
                            isBlog={false}
                            title="ENSEM MAP"
                            description="A venir"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[twizzy]}  // Une seule image pour ce projet
                            isBlog={false}
                            title="Twizzy"
                            description="A venir"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[sami,sami1,sami2]}  // Une seule image
                            isBlog={false}
                            title="SAMI"
                            description="A venir"

                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[pacman]}  // Une seule image
                            isBlog={false}
                            title="PACMAN GAME"
                            description="A venir"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[separation]}  // Une seule image
                            isBlog={false}
                            title="Machine Learning Séparation"
                            description="A venir"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[robot1, robotic12, robotic13, robotic14]}  // Plusieurs images
                            isBlog={false}
                            title="ROBITIQUE 1"
                            description="A venir"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[robot2, robotic22, robotic23]}  // Une seule image
                            isBlog={false}
                            title="ROBOTIQUE 2"
                            description="A venir"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[perona1, perona11, perona2]}  // Une seule image
                            isBlog={false}
                            title="DEBRUITAGE (PERONA MALIK)"
                            description="A venir"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[pendulum2, chaos, pendulum3]}  // Une seule image
                            isBlog={false}
                            title="Pendule Magnétique"
                            description="A venir"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[dogbreed, dogbreed2, dogbreed3]}  // Une seule image
                            isBlog={false}
                            title="DOG BREEDS"
                            description="A venir"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
