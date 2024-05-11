import { Container } from "react-bootstrap";

export const Ref = () => {

    return (
        <section className="ref" id="ref">
            <Container fluid>
                <div className="ref-box">
                    <marquee>
                        <h4 className="ref-scroller">
                            <span className="ref-head">Attributions: </span>
                            <span className="ref-text">Icons By Flaticon</span>
                            <span className="ref-text">Photos By Pexels</span>
                        </h4>
                        <h4 className="ref-scroller">
                        <span className="ref-head">Attributions: </span>
                            <span className="ref-text">Icons By Flaticon</span>
                            <span className="ref-text">Photos By Pexels</span>
                        </h4>
                    </marquee>
                </div>
            </Container>
        </section>
    )
}