import { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header.png";

export const Banner = () => {
    /*
    // "about me" text animation finctions
    const [loopRate, setLoopRate] =useState(0);
    const [isDeleting, setIsDeleting] =useState(false);
    const toRotate = [ "Software Engineer", "Web Developer", "Computer Engineer" ];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const timePeriod = 2000;

    useEffect(() => {
        let secTime = setInterval(() => {
            timerCount();
        },delta)

        return () => { clearInterval(secTime) }
    }, [text])
    
    const timerCount = () => {
        let i = loopRate % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(timePeriod);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopRate(loopRate + 1);
            setDelta(500);
        }
    }*/

    return (
        <section className="banner" id="home">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hello! I'm Omoohwo`}</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A aliquam, repellat aspernatur veniam, obcaecati voluptate libero, consequuntur praesentium excepturi sed quisquam neque minus deserunt nisi iusto recusandae exercitationem eum laudantium.</p>
                        <button onClick={() => console.log(çonnect)}>Contact Me <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Banner Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}