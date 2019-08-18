import TermsBlock from "../components/TermsBlock";

import termsData from "../data/terms.json";

export default () => {
    return (
        <div>
            <h1>Terms and conditions</h1>
            {
                termsData.map((item, index) => {
                    return <TermsBlock key={index} number={++index} title={item.title} items={item.items} />
                })
            }
        </div>
    )
}