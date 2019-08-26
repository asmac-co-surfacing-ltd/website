import "./style.scss";
import Section from "../components/Section";


export default () => {
    return(
        <Section title="Clients" theme="white">
            <div className="logo-box">
                <img scr="../static/images/logo1.jpg" alt=""/>
                <img scr="../static/images/logo2.jpg" alt=""/>
            </div>
        </Section>
    )
}