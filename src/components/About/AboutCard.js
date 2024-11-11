import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
    <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
            Bonjour, je suis <span className="purple">Esteban Marteau</span>.
            <br />
            Je suis récemment diplômé de Georgia Institute of Technology (Master) et de l'ENSEM (École Nationale Supérieure d'Électricité et de Mobilité) (Ingénieur), tous deux dans le domaine de l'<span className="purple">Informatique</span>, plutôt généraliste.
            <br />
            <br />
            Au cours de mes études, j'ai acquis des compétences dans de nombreux domaines :
            <br />
            <br />
            Mathématiques, programmation, développement, machine learning, deep learning, robotique, optimisation, traitement du signal, automatisme, bases de données, systèmes et réseaux, électricité, gestion de projets, optimisation, théorie des graphes, sûreté de fonctionnement.
            <br />
            <br />
            <br /> J'ai également travaillé avec diverses technologies : Python, C++, C#, Java, Matlab, SQL, C, VHDL...
            <br />
            <br />
            Et maîtrisé différentes méthodologies : cycle en V, agile, SCRUM, ainsi que les diagrammes UML.
            <br />
            <br />
            Dans mon temps libre, j'ai de nombreux centres d'intérêt :
        </p>
        <ul>
            <li className="about-activity">
                <ImPointRight /> Jeux vidéo (jouer et créer)
            </li>
            <li className="about-activity">
                <ImPointRight /> Randonnée
            </li>
            <li className="about-activity">
                <ImPointRight /> Sport (volley-ball, badminton, escalade)
            </li>
            <li className="about-activity">
                <ImPointRight /> Lecture (livres et mangas)
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
