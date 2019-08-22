import Content from "../components/Content";
import aboutData from "../data/about.json"
import AboutBlock from "../components/AboutBlock";


export default () => {
    return (
        <Content>
            {
                aboutData.map((item, index) => {
                    return (
                        <AboutBlock key={index} number={++index} title={item.title} items={item.items} />
                    )
                })
            }
        </Content>
    )
}