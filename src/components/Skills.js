import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skillImg1 from "../assets/img/css-3.png";
import skillImg2 from "../assets/img/html-5.png";
import skillImg3 from "../assets/img/java.png";
import skillImg4 from "../assets/img/nodejs.png";
import skillImg5 from "../assets/img/python.png";
import skillImg6 from "../assets/img/JS.png";
import skillImg7 from "../assets/img/react.png";
import skillImg8 from "../assets/img/database.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 5
        },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
        }
    };

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A aliquam, repellat aspernatur veniam, obcaecati voluptate libero. Consequuntur praesentium excepturi sed quisquam neque minus deserunt nisi iusto recusandae exercitationem eum laudantium.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={skillImg5} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={skillImg3} alt="Image" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={skillImg4} alt="Image" />
                                    <h5>NodeJS</h5>
                                </div>
                                <div className="item">
                                    <img src={skillImg7} alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={skillImg6} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={skillImg8} alt="Image" />
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={skillImg2} alt="Image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={skillImg1} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}