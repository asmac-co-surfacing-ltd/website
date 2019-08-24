import WelcomeBanner from "../components/WelcomeBanner";
import Section from "../components/Section";
import Testimonials from "../components/Testimonials";

export default () => {
    return (
        <div>
            <WelcomeBanner />
            <Section title="About" theme="yellow">
                Asmac has been around since the stone age.
            </Section>
            <Section title="Clients">
                <ul>
                    <li>Logo 1</li>
                    <li>Logo 2</li>
                    <li>Logo 3</li>
                    <li>Logo 4</li>
                </ul>
            </Section>
            <Section title="Testimonials">
                <Testimonials />
            </Section>
        </div>
    );
};

