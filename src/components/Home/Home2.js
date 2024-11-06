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
              Je suis un jeune diplomé ingénieur et Master tout deux dans l'informatique. Je suis passionné de mathématiques et de programmation. Ce qui me plait dans ce domaine
              c'est de réfléchir à une solution concrète et de pouvoir la traduire avec du code, je trouce cela très stimulant et intéréssant.
              <br />
              <br />Je maitrises plusieurs langages comme
              <i>
                <b className="purple"> Python, C++, C#, Java. </b>
              </i>
              <br />
              <br />
              Ce qui me plait le plus est la création d'algorithmes. Je rechcher un environnment
              <i>
                <b className="purple"> challengeant  </b> dans lequel je pourrais
                <b className="purple"> apprendre </b> tous les jours.
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
            <h1>Vous pouvez me contacter par mail, téléphone ou sur Linkedin</h1>
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
