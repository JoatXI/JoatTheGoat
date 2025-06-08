import { Container, Row, Col } from "react-bootstrap";
import { BoxArrowUpRight } from "react-bootstrap-icons";

export const Projects = () => {

    return (
        <section className="project" id="projects">
            <Container fluid>
                <div className="project-header">
                    <h2>PROJECTS</h2>
                    <p>A preview of a few personal projects I have worked on in recent years; I'm currently working on live demonstration features.</p>
                </div>
                <div className="project-cards">
                    <Row>
                        <Col>
                            <div className="card one">
                                <div className="card-content">
                                    <h3 className="card-title">Recipe Sharer</h3>
                                    <p className="card-body">A recipe-sharing Web Application that allows users to share and explore various recipes.</p>
                                    <a href="https://recipe-demo-cvgefqcshhbmf4dy.ukwest-01.azurewebsites.net" target="_blank" rel="noopener noreferrer" className="card-butn">Demo <BoxArrowUpRight size={15} /></a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card two">
                                <div className="card-content">
                                    <h3 className="card-title">Screen Recorder (Ẹro)</h3>
                                    <p className="card-body">A cross-platform Python-based screen recording application with automation capabilities.</p>
                                    <a href="https://github.com/JoatXI/ero" target="_blank" rel="noopener noreferrer" className="card-butn">Source <BoxArrowUpRight size={15} /></a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card three">
                                <div className="card-content">
                                    <h3 className="card-title">Email Security</h3>
                                    <p className="card-body">A Microsoft Outlook Add-In for sending secured emails with real-time sensitive data detection & Encryption options.</p>
                                    <a href="https://email-prototype.azurewebsites.net" target="_blank" rel="noopener noreferrer" className="card-butn">Demo <BoxArrowUpRight size={15} /></a>
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