import { Container } from "react-bootstrap";
import { useEffect } from "react";

export const Ref = () => {

    useEffect(() => {
        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.querySelector(".marquee-content");
        const marqueeTwo = document.querySelector(".n1");
        const marqueeThree = document.querySelector(".n2");

        if (marqueeContent) {
            root.style.setProperty("marquee-elements", marqueeContent.children.length);
            root.style.setProperty("marquee-elements", marqueeTwo.children.length);
            root.style.setProperty("marquee-elements", marqueeThree.children.length);
            
            for (let i = 0; i < marqueeElementsDisplayed; i++) {
                marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
                marqueeTwo.appendChild(marqueeTwo.children[i].cloneNode(true));
                marqueeThree.appendChild(marqueeThree.children[i].cloneNode(true));
            }
        }
    }, []);

    return (
        <section className="ref" id="ref">
            <Container fluid>
                <div className="marquee">
                    <ul className="marquee-content">
                        <li className="ref-head">Attributions: </li>
                        <li className="ref-text">Icons By Flaticon</li>
                        <li className="ref-text">Photos By Pexels</li>
                        <li className="ref-head">Inspiration: </li>
                        <li className="ref-text">Vishwa</li>
                        <li className="ref-text">WD-Code YT</li>
                    </ul>
                </div>
                <div className="marquee">
                    <ul className="marquee-content n1">
                        <li className="ref-head">Attributions: </li>
                        <li className="ref-text">Icons By Flaticon</li>
                        <li className="ref-text">Photos By Pexels</li>
                        <li className="ref-head">Inspiration: </li>
                        <li className="ref-text">Vishwa</li>
                        <li className="ref-text">WD-Code YT</li>
                    </ul>
                </div>
                <div className="marquee">
                    <ul className="marquee-content n2">
                        <li className="ref-head">Attributions: </li>
                        <li className="ref-text">Icons By Flaticon</li>
                        <li className="ref-text">Photos By Pexels</li>
                        <li className="ref-head">Inspiration: </li>
                        <li className="ref-text">Vishwa</li>
                        <li className="ref-text">WD-Code YT</li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}