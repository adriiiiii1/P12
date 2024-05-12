
import FirstPart from "./FirstPart.jsx"
import SecondPart from "./SecondPart.jsx"
import Skills from "../../Component/Skills/Skills.jsx"
import Portfolio from "../../Component/Portfolio/Portfolio.jsx"
import Contact from "../../Component/Contact/contact.jsx"

import './HomePage.css';

function HomePage (){

    return(
        <section  className="home-page-container">
            <FirstPart />
            <SecondPart />
            <Skills />
            <Portfolio />
            <Contact  name="contact"/>
        </section>
            );
        }

    export default HomePage