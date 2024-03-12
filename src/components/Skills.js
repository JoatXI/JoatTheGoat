import { Container, Row, Col } from "react-bootstrap";
import skillImg1 from "../assets/img/css.svg";
import skillImg2 from "../assets/img/html5.svg";
import skillImg3 from "../assets/img/java.svg";
import skillImg4 from "../assets/img/nodejs.svg";
import skillImg5 from "../assets/img/python.svg";
import skillImg6 from "../assets/img/javascript.svg";
import skillImg7 from "../assets/img/react.svg";
import skillImg8 from "../assets/img/mysql.svg";
import skillImg9 from "../assets/img/sqlite.svg";
import skillImg10 from "../assets/img/babel.svg";
import skillImg11 from "../assets/img/kotlin.svg";
import skillImg12 from "../assets/img/bootstrap.svg";
import skillImg13 from "../assets/img/npm.svg";
import skillImg14 from "../assets/img/apache.svg";
import skillImg15 from "../assets/img/githubpages.svg";
import skillImg16 from "../assets/img/render.svg";
import skillImg17 from "../assets/img/photoshop.svg";
import skillImg18 from "../assets/img/adobe fonts.svg";
import skillImg19 from "../assets/img/premiere.svg";
import skillImg20 from "../assets/img/git.svg";
import skillImg21 from "../assets/img/github.svg";
import skillImg22 from "../assets/img/express.svg";
import skillImg23 from "../assets/img/anaconda.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";

import skillPhoto from "../assets/img/tech-stack.gif";

export const Skills = () => {
    
    return (
        <section className="skills" id="skills">
            <Container fluid>
                <div class="skills-box">
                    <Row>
                        <h2>SKILLS</h2>
                        <Col xs={12} md={6} xl={5} className="skill-banner">
                            <img src={skillPhoto} alt="Tech Stack"/>
                        </Col>
                        <Col xs={12} md={6} xl={7}>
                            <div className="skills-tree">
                                <div className="row">
                                    <p>Version Control:</p>
                                    <img src={skillImg20} alt="Git" />
                                    <img src={skillImg21} alt="GitHub" />
                                </div>
                                <div className="row">
                                    <p>Databases, Servers & Web Hosting:</p>
                                    <img src={skillImg8} alt="MySQL" />
                                    <img src={skillImg9} alt="SQLite" />
                                    <img src={skillImg14} alt="Apache" />
                                    <img src={skillImg15} alt="Pages" />
                                    <img src={skillImg16} alt="Render" />
                                </div>
                                <div className="row">
                                    <p>Languages:</p>
                                    <img src={skillImg6} alt="JavaScript" />
                                    <img src={skillImg5} alt="Python" />
                                    <img src={skillImg11} alt="Kotlin" />
                                    <img src={skillImg3} alt="Java" />
                                    <img src={skillImg2} alt="HTML" />
                                    <img src={skillImg1} alt="CSS" />
                                </div>
                                <div className="row">
                                    <p>Frameworks, Platforms & Libraries:</p>
                                    <img src={skillImg4} alt="Node.js" />
                                    <img src={skillImg22} alt="ExpressJs" />
                                    <img src={skillImg13} alt="NPM" />
                                    <img src={skillImg7} alt="React" />
                                    <img src={skillImg10} alt="Babel" />
                                    <img src={skillImg12} alt="Bootstrap" />
                                    <img src={skillImg23} alt="Anaconda" />
                                </div>
                                <div className="row">
                                    <p>Design Tools:</p>
                                    <img src={skillImg17} alt="Photoshop" />
                                    <img src={skillImg18} alt="Fonts" />
                                    <img src={skillImg19} alt="Premiere" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}