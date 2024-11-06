import React from "react";
import matlabIcon from './Matlab_Logo.png';
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiPython,
    DiDatabase,
    DiJava,
} from "react-icons/di";
import {
    SiCsharp,
    SiMysql,
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons" title="Python">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="C++">
                <CgCPlusPlus />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="C#">
                <SiCsharp />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Java">
                <DiJava />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="SQL">
                <DiDatabase />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="MySQL">
                <SiMysql />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="MATLAB">
                <img src={matlabIcon} alt="MATLAB" style={{ width: '50px', height: '50px' }} />
            </Col>
        </Row>
    );
}

export default Techstack;
