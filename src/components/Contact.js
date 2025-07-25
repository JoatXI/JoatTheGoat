import { Container, Row, Col } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import contactImg from "../assets/img/connect.png";
import gitPNG from "../assets/img/github.png";
import linkedPNG from "../assets/img/linkedin.png";
import emailPNG from "../assets/img/e-contact.png";

export const Contact = () => {
    const fileUrl = "https://www.JoatXI.com/Eng_Resume.pdf";
    
    const fileDownload = (url) => {
        fetch(url).then(response => response.blob()).then(blob=> {
            const blobUrl = window.URL.createObjectURL(new Blob([blob]));
            const fileName = url.split("/").pop();
            const download = document.createElement('a');
            download.href = blobUrl;
            download.setAttribute('download', fileName);
            document.body.appendChild(download);
            download.click();
            download.remove();
        })
    }

    return (
        <section className="contact" id="connect">
                <Container fluid>
                    <div className="contact-box">
                        <Row>
                            <h2>CONTACT</h2>
                            <Col xs={12} md={5} xl={5} className="contact-banner">
                                <img src={contactImg} alt="Contact Img" />
                            </Col>
                            <Col xs={12} md={7} xl={7}>
                                <div className="contact-content">
                                    <h3>Get In Touch</h3>
                                    <div className="platforms-box">
                                        <a href="https://github.com/JoatXI" target="_blank" rel="noopener noreferrer"><img src={gitPNG} alt="Github Img" /></a>
                                        <a href="https://www.linkedin.com/in/JoatXI/" target="_blank" rel="noopener noreferrer"><img src={linkedPNG} alt="LinkedIn Img" /></a>
                                        <a href="mailto:joatxibusiness@gmail.com" target="_blank" rel="noopener noreferrer"><img src={emailPNG} alt="Email Img" /></a>
                                    </div>
                                    <div className="contact-resume">
                                        <button onClick={()=>{fileDownload(fileUrl)}}>Resume <Download size={30} /></button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
        </section>
    )
}