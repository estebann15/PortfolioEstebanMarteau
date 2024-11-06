import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je suis <span className="purple">Esteban Marteau</span>     
            <br />
                      Je suis depuis peu, diplomé de Georgia Institute of technlogy (Master) et ENSEM (Ecole National Superieur d'Electricité et De mobilité) (Ingénieur) tout deux en section <span className="purple"> Informatique</span>, plutot généraliste.
                      <br />
                      <br />
            Dans ces écoles, j'ai pu apprendre de nombreux sujets :
                      <br />
                      <br />
            Mathématiques, Programmation, Développement, Machine Learning, Deep Learning, Robotique, Optimisations, Traitement de Signal, Automatisme, Bases de données, Systèmes et Reseaux, Electricité, Gestion de projets, Optimisation, Théorie des Graphes, Sureté de fonctionnement.
                      <br />
                      <br />
                      <br /> Avec différentes technologies : Python, C++, C#, Java,Matlab, SQL, C, VHDL...
                      <br /> 
                      <br /> Et les méthodologies en V, agiles, SCRUM et diagrammes UML.
                      <br />
                      <br />
            Dans mon temps libre j'ai de nombreux loisirs :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jeux videos (jouer et créer)
            </li>
            <li className="about-activity">
              <ImPointRight /> Randonnées
            </li>
            <li className="about-activity">
              <ImPointRight /> Sport (Volley ball, Badminton et Escalade)
            </li>
            <li className="about-activity">
                <ImPointRight /> Lecture (Livres et Mangas)
            </li>
            <li className="about-activity">
                <ImPointRight /> Cuisine
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
