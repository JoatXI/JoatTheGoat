import { Container, Row, Col } from "react-bootstrap";
import { BoxArrowUpRight } from "react-bootstrap-icons";

export const Projects = () => {

    return (
        <section className="project" id="projects">
            <Container fluid>
                <div className="project-header">
                    <h2>PROJECTS</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore deserunt corrupti ab quam eaque deleniti quaerat officia.</p>
                </div>
                <div class="project-cards">
                    <Row>
                        <Col>
                            <div class="card one">
                                <div class="card-content">
                                    <h3 className="card-title">Todo App</h3>
                                    <p className="card-body">An android application that enables users to write down a list of task to complete.</p>
                                    <a href="https://github.com/JoatXI/Todo-App" target="_blank" rel="noopener noreferrer" className="card-butn">Source <BoxArrowUpRight size={15} /></a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div class="card two">
                                <div class="card-content">
                                    <h3 className="card-title">Space Invader</h3>
                                    <p className="card-body">A python game where players controls a spaceship to shoot down invading alien ships.</p>
                                    <a href="https://github.com/JoatXI/SpaceRaiderClone" target="_blank" rel="noopener noreferrer" className="card-butn">Source <BoxArrowUpRight size={15} /></a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card three">
                                <div class="card-content">
                                    <h3 className="card-title">Rental Site</h3>
                                    <p className="card-body">A web app which allows users to book places to stay while away, such as hotels.</p>
                                    <a href="https://github.com/JoatXI/PTS-WebApp" target="_blank" rel="noopener noreferrer" className="card-butn">Source <BoxArrowUpRight size={15} /></a>
                                </div>
                            </div>
                        </Col>
                        <div className="card-footer">
                            <a href="https://github.com/JoatXI" target="_blank" rel="noopener noreferrer">*More Projects on GitHub</a>
                        </div>
                    </Row>
                </div>
            </Container>
        </section>
    )
}