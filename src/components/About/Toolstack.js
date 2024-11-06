import React from "react";
import excel from './excel.png';
import word from './word.png';
import powerpoint from './powerpoint.png';
import visualstudio from './visualstudio.png';
import pycharm from './pycharm.png';
import eclipse from './eclipse.png';
import unity from './unity.png';
import { Col, Row } from "react-bootstrap";
import {
    DiGit,
} from "react-icons/di";

import { AiFillGithub } from "react-icons/ai";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons" title="Git">
                <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="GitHub">
                <AiFillGithub />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Microsoft Word">
                <img src={word} alt="Word" style={{ width: '50px', height: '50px' }} />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Microsoft Excel">
                <img src={excel} alt="Excel" style={{ width: '50px', height: '50px' }} />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Microsoft PowerPoint">
                <img src={powerpoint} alt="PowerPoint" style={{ width: '50px', height: '50px' }} />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Visual Studio">
                <img src={visualstudio} alt="Visual Studio" style={{ width: '50px', height: '50px' }} />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="PyCharm">
                <img src={pycharm} alt="PyCharm" style={{ width: '50px', height: '50px' }} />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Eclipse">
                <img src={eclipse} alt="Eclipse" style={{ width: '50px', height: '50px' }} />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Unity">
                <img src={unity} alt="Unity" style={{ width: '50px', height: '50px' }} />
            </Col>
        </Row>
    );
}

export default Toolstack;
