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
                                    <h3 className="card-title">Bank App</h3>
                                    <p className="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem facilis.</p>
                                    <a href="#" className="card-butn">Demo <BoxArrowUpRight size={15} /></a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div class="card two">
                                <div class="card-content">
                                    <h3 className="card-title">Space Invader</h3>
                                    <p className="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem facilis.</p>
                                    <a href="#" className="card-butn">Demo <BoxArrowUpRight size={15} /></a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card three">
                                <div class="card-content">
                                    <h3 className="card-title">AI Robot</h3>
                                    <p className="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem facilis.</p>
                                    <a href="#" className="card-butn">Demo <BoxArrowUpRight size={15} /></a>
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