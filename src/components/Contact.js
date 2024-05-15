import { Container, Row, Col } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import contactImg from "../assets/img/contact-me.gif";
import gitPNG from "../assets/img/github.png";
import linkedPNG from "../assets/img/linkedin.png";
import emailPNG from "../assets/img/e-contact.png";

export const Contact = () => {

    return (
        <section className="contact" id="connect">
                <Container fluid>
                    <div class="contact-box">
                        <Row>
                            <h2>CONTACT</h2>
                            <Col xs={12} md={6} xl={5} className="contact-banner">
                                <img src={contactImg} alt="Contact Me" />
                            </Col>
                            <Col xs={12} md={6} xl={7}>
                                <div class="contact-content">
                                    <h3>Get In Touch</h3>
                                    <div className="platforms-box">
                                        <a href="https://github.com/JoatXI" target="_blank" rel="noopener noreferrer"><img src={gitPNG} alt="Github icon" /></a>
                                        <a href="https://www.linkedin.com/in/JoatXI/" target="_blank" rel="noopener noreferrer"><img src={linkedPNG} alt="LinkedIn icon" /></a>
                                        <a href="mailto:<omoohwo.o@gmail.com>" target="_blank" rel="noopener noreferrer"><img src={emailPNG} alt="Email icon" /></a>
                                    </div>
                                    <div className="contact-resume">
                                        <a href="../assets/img/headshot.png" download="SE_Resume">Resume <Download size={30} /></a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
        </section>
    )
}