import WelcomeBanner from "../components/WelcomeBanner";
import Section from "../components/Section";
import Clientlist from "../components/Clientlist"
import Testimonials from "../components/Testimonials";

export default () => {
    return (
        <div>
            <WelcomeBanner />
            <Section title="About" theme="yellow">
            ASMAC &amp; COMPANY (SURFACING) LIMITED was established in 1975. Our strengths lie in the high level of service and workmanship we offer all our clients, this has only been achieved and is credited to our experienced and highly trained staff.
            </Section>
            <Section title="Clients" theme="white">
                
            </Section>
            <Section title="Testimonials">
                <Testimonials />
            </Section>
        </div>
    );
};

