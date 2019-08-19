import Content from "../components/Content";
import TermsBlock from "../components/TermsBlock";

import termsGeneral from "../data/generalTerms.json";
import termsData from "../data/terms.json";

export default () => {
    return (
        <Content>
            <h1>Terms and conditions - Macadam</h1>
            {
                termsData.map((item, index) => {
                    return (
                        <TermsBlock key={index} number={++index} title={item.title} items={item.items} />
                    )
                })
            }
            <h1>Terms and Conditions - General</h1>
            {
                termsGeneral.map((item, index) => {
                    return (
                        <TermsBlock key={index} number={++index} title={item.title} items={item.items} />
                    )
                })
            }
        </Content>
    )
}