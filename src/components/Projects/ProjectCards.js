import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Carousel } from "react-bootstrap";

function ProjectCard(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // Vérification si plusieurs images sont passées en prop 'imgPaths'
    const renderImages = () => {
        if (props.imgPaths && props.imgPaths.length > 1) {
            return (
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {props.imgPaths.map((image, idx) => (
                        <Carousel.Item key={idx}>
                            <img
                                className="d-block w-100"
                                src={image}
                                alt={`slide-${idx}`}
                                style={{ height: "auto", width: "100%" }}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            );
        } else {
            return <Card.Img variant="top" src={props.imgPaths[0]} alt="card-img" />;
        }
    };

    return (
        <Card className="project-card-view">
            {renderImages()}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;
