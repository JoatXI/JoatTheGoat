import { Container, Row, Col} from "react-bootstrap";
import headerImg from "../assets/img/headshot.png";

export const Banner = () => {

    return (
        <section className="banner" id="home">
            <Container fluid>
                <div class="banner-box">
                    <Row>
                        <Col xs={12} md={6} xl={7} className="banner-text">
                            <div className="banner-content">
                                <h1>My name is ỌMỌOHWÓ, I'm a Software Engineer.</h1>
                                <p>Lorem ipsum dolor  amet consectetur.</p>
                                <h2>Here's a story for you</h2>
                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="Banner Img" />
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}