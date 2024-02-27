import { Container, Row, Col} from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import headerImg from "../assets/img/headshot.png";

export const Banner = () => {

    return (
        <section className="banner" id="home">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hello! I'm Omoohwo`}</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A aliquam, repellat aspernatur veniam, obcaecati voluptate libero, consequuntur praesentium excepturi sed quisquam neque minus deserunt nisi iusto recusandae exercitationem eum laudantium.</p>
                        <a href="../assets/img/headshot.png" download="SE_Resume">
                            <button className="resume-button">Resume<Download size={25} /></button>
                        </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Banner Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}