import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { EmojiSunglassesFill, Joystick, CameraReels, Braces, PlayFill, BrushFill, FiletypeSvg } from "react-bootstrap-icons";
import pexels from "../assets/img/ai.png";
import football from "../assets/img/football.png";
import flatIcons from "../assets/img/flaticon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";

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
                        <li className="ref-head"><FiletypeSvg size={23} />Icons By</li>
                        <li className="ref-text1"><img src={flatIcons} alt="flaticon img"/>Flaticon</li>
                        <li className="ref-text2"><FontAwesomeIcon icon={faFontAwesome} />FontAwesome</li>
                        <li className="ref-text3"><img src={pexels} alt="pixels img"/>Images By Ọmọohwó</li>
                    </ul>
                </div>
                <div className="marquee">
                    <ul className="marquee-content n1">
                        <li className="ref-head"><BrushFill size={20} />Design Inspired By</li>
                        <li className="n1-text1"><Braces size={26} />Vishwa Gaurav</li>
                        <li className="n1-text2"><PlayFill size={26} />WebDecoded on YT</li>
                    </ul>
                </div>
                <div className="marquee">
                    <ul className="marquee-content n2">
                        <li className="ref-head"><EmojiSunglassesFill size={26} />Pleasures</li>
                        <li className="n2-text1"><Joystick size={26}/>Street Fighter 6</li>
                        <li className="n2-text2"><CameraReels size={26} />Documentaries</li>
                        <li className="n2-text3"><img src={football} alt="football img"/>Football</li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}