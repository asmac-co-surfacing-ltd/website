import "../components/TermsBlock";

import Section from "../components/Section";
import TermsBlock from "../components/TermsBlock";

import termsGeneral from "../data/generalTerms.json";
import termsData from "../data/terms.json";

export default () => {
    return (
        <div>
            <Section title="Terms and conditions - Macadam">
                {
                    termsData.map((item, index) => {
                        return (
                            <TermsBlock key={index} number={++index} title={item.title} items={item.items} />
                        )
                    })
                }
            </Section>
            <Section title="Terms and conditions - General" theme="white">
                {
                    termsGeneral.map((item, index) => {
                        return (
                            <TermsBlock key={index} number={++index} title={item.title} items={item.items} />
                        )
                    })
                }
            </Section>
        </div>
    )
}