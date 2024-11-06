import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/projets.svg";
import Particle from "../Particle";
import Home2 from "./Home2";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Bonjour!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                JE SUIS
                <strong className="main-name"> ESTEBAN MARTEAU</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>

            </div>

            <h1 className="heading-name">
                <strong className="main-name"> Ingénieur développement informatique</strong>
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}>

            </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
// used : F4661B  FEA347  E67E30