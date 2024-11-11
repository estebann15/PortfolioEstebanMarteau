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
                            title="Outil d'automatisation de la couverture de modèle pour un pilote automatique"
                            description="Projet réalisé lors de mon stage chez Thales. La couverture de modèle pour le pilote automatique d'un hélicoptère Airbus étant très longue, j'ai créé un outil pour automatiser ce processus. J'ai mené ce projet de A à Z, de la spécification des besoins à la certification EASA, en passant par la programmation en Python."
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[stage1,stage11]}  // Plusieurs images
                            isBlog={false}
                            title="Projet Stage découverte ingénieur"
                            description="Dans le cadre de nouvelles normes gouvernementales, le site de Marcoule doit ajouter des places de parking avec bornes de recharge électrique. J'interviens en début de projet pour recenser et cartographier les places de stationnement sur le site de l'entreprise. (QGIS, Python)"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[robot1, robotic12, robotic13, robotic14]}  // Plusieurs images
                            isBlog={false}
                            title="ROBITIQUE 1"
                            description="Projet de robotique où j'ai programmé l'algorithme d'un robot pour qu'il utilise son LIDAR et GPS afin de parcourir et cartographier une salle de manière optimale. (ROS2, C++, Python)"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[robot2, robotic22, robotic23]}  // Une seule image
                            isBlog={false}
                            title="ROBOTIQUE 2"
                            description="Projet de recherche en groupe avec deux collègues américains. Nous devions trouver le meilleur algorithme pour permettre au robot Husky de se déplacer d'un point à un autre à l'intérieur, où le GPS est inutilisable, en utilisant son LIDAR. (ROS2, C++, Python)"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[perona1, perona11, perona2]}  // Une seule image
                            isBlog={false}
                            title="DEBRUITAGE (PERONA MALIK)"
                            description="Projet dans le cadre d'un cours sur les équations aux dérivées partielles (EDP). J'ai utilisé l'équation de Perona-Malik pour débruiter une image bruitée de plusieurs manières différentes (Gaussienne, multiplicative, etc.). Réalisé en Matlab."
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[pendulum2, chaos, pendulum3]}  // Une seule image
                            isBlog={false}
                            title="Pendule Magnétique"
                            description="Dans le cadre d'un cours sur le chaos en mathématiques, j'ai modélisé et étudié le comportement chaotique d'un pendule magnétique. Les images illustrent son comportement en fonction de différents paramètres. Réalisé avec Mathematica."
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[dogbreed, dogbreed2, dogbreed3]}  // Une seule image
                            isBlog={false}
                            title="DOG BREEDS"
                            description="Dans le cadre d'un cours de statistiques appliquées au machine learning, projet d'identification de la race d'un chien à partir d'une image en utilisant des techniques de machine learning étudiées en classe, telles que Random Forest, CNN et k-NN."
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[ensemMap,ensemMap2]}  // Plusieurs images
                            isBlog={false}
                            title="ENSEM MAP"
                            description="Projet scolaire visant à créer une application permettant aux élèves de mon école de se déplacer dans les couloirs labyrinthiques de l'ENSEM. Application réalisée en Java avec Android Studio."
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[twizzy]}  // Une seule image pour ce projet
                            isBlog={false}
                            title="Twizzy"
                            description="Twizzy est une voiture autonome. Le projet consiste à détecter et identifier les panneaux de signalisation lors de la conduite. Nous avons développé la partie algorithmique, permettant de détecter les panneaux rencontrés à partir d'une vidéo en utilisant le machine learning. J'ai occupé le rôle de chef de projet. (JAVA, OpenCV)"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[sami,sami1,sami2]}  // Une seule image
                            isBlog={false}
                            title="SAMI"
                            description="Projet complet visant à optimiser le parcours d'un robot pour qu'il atteigne des points le plus rapidement possible. J'ai contribué à la partie mathématique, où l'objectif était de trouver le meilleur algorithme pour parcourir ces points avec le moins de trajets possible, résolvant ainsi le problème du voyageur. (Python)"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[pacman]}  // Une seule image
                            isBlog={false}
                            title="PACMAN GAME"
                            description="Projet scolaire où nous devions recréer un jeu de type PACMAN. L'objectif était de suivre une méthodologie SCRUM et de pratiquer la gestion de projet. Réalisé en Python."
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPaths={[separation]}  // Une seule image
                            isBlog={false}
                            title="Machine Learning Séparation"
                            description="Projet d'introduction au machine learning consistant à séparer des feuilles d'arbres en fonction de certaines caractéristiques. Réalisé en Python avec Scikit-learn."
                        />
                    </Col>        
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
