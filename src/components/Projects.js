import { ProjectCard } from "./ProjectCard";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import projImg1 from '../assets/img/app-project.jpg';
import projImg2 from '../assets/img/game-project.jpg';
import projImg3 from '../assets/img/ai-project.jpg';

export const Projects = () => {

    const projects = [
        {
            title: "Project 1",
            description: "Bank Application Project",
            imgUrl: projImg1,
        },
        
        {
            title: "Project 2",
            description: "Space Invaders Game created with react",
            imgUrl: projImg2,
        },
        {
            title: "Project 3",
            description: "A Personal AI Assistant Project",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <h2>Projects</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore deserunt corrupti ab quam eaque deleniti quaerat officia.</p>
                                <Tab.Container id="projects-tab" defaultActiveKey="one">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey="one">
                                            <Row>
                                                {projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard 
                                                        key={index}
                                                        {...project} />
                                                    )
                                                })}
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}