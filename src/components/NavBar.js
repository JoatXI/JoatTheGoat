import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import linkedinIcon from "../assets/img/linkedin.png";
import githubIcon from "../assets/img/github.png";
import { HashLink } from "react-router-hash-link";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolling, setScrolling] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar className={scrolling ? "scrolling": ""}>
            <Container fluid>
                <Navbar.Brand href="/">
                    <h2>JOATXI</h2>
                </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink} to="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link as={HashLink} to="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link as={HashLink} to="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/JoatXI/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn icon" /></a>
                            <a href="https://github.com/JoatXI" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="Github icon" /></a>
                        </div>
                        <HashLink to="#connect">
                            <button className="vvd"><span>Connect</span></button>
                        </HashLink>
                        <div className="resume-button">
                            <a href="../assets/img/headshot.png" download="SE_Resume">Resume<Download size={20} /></a>
                        </div>
                    </span>
            </Container>
        </Navbar>
    )
}