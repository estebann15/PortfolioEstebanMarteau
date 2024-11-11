import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Petite <span className="purple"> Introdcution </span> 
            </h1>
            <p className="home-about-body">
                Je suis un ingénieur récemment diplômé, aussi titulaire d'un Master en informatique. Passionné par les mathématiques et la programmation, ce qui m'inspire dans ce domaine, c'est de concevoir des solutions concrètes et de les implémenter en code. Ce processus est pour moi à la fois stimulant et enrichissant.
                <br />
                <br />Je maîtrise plusieurs langages de programmation, dont
                <i>
                    <b className="purple">Python, C++, C#, Java.</b>
                </i>
                <br />
                <br />
                Ce que je préfère, c'est la création d'algorithmes. Je suis à la recherche d'un environnement
                <i>
                    <b className="purple">dynamique</b> et
                    <b className="purple">challengeant</b>, où je pourrais
                    <b className="purple">apprendre</b> et évoluer chaque jour.
                </i>
              <br />
              <br />                          
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
            <h1>Vous pouvez me contacter par e-mail, téléphone ou sur LinkedIn.</h1>
            <p>
              esteban.mrt15@gmail.com / (+33)6 18 17 32 55
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/estebann15"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/estebanmarteau"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
