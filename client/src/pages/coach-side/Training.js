import React, { Component } from "react";
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import CatchingAndThrowing from "../../Components/TrainingPhysical/CatchingAndThrowing/CatchingAndThrowing";
import Balance from "../../Components/TrainingPhysical/Balance/Balance";
import Kicking from "../../Components/TrainingPhysical/Kicking/Kicking";
import Strength from "../../Components/TrainingPhysical/Strength/Strength";
import FineMotor from "../../Components/TrainingPhysical/FineMotor/FineMotor";
import Translation from "../../Components/TrainingPhysical/Translation/Translation";
import Rotation from "../../Components/TrainingPhysical/Rotation/Rotation";
import Striking from "../../Components/TrainingPhysical/Striking/Striking";


export const Training = () => (

    
    <div>
        <h2> Training </h2>
        <p> Discover more training! </p>

        <Tab.Container id="left-tabs-example" defaultActiveKey="CandT">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                    <Nav.Link eventKey="CandT">Catching and Throwing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Bal">Balance</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Kick">Kicking</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Str">Strength</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="FM">Fine Motor</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Trans">Translation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Rot">Rotation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="Strike">Striking</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="CandT">
                    <CatchingAndThrowing />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Bal">
                    <Balance />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Kick">
                    <Kicking />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Str">
                    <Strength />
                    </Tab.Pane>
                    <Tab.Pane eventKey="FM">
                    <FineMotor />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Trans">
                    <Translation />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Rot">
                    <Rotation />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Strike">
                    <Striking />
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>   
    </div>
)

export default Training;