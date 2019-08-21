import Content from "../components/Content";
import aboutData from "../data/about.json"
import AboutBlock from "../components/AboutBlock";

export default () => {
    return (
        <Content>
            <div className="about-box">
                <div>
                    {
                        aboutData.map((index, item) => {
                            return (
                                <div>
                                <AboutBlock key={index} title={item.title} items={item.items} />
                                </div>
                            )
                        })
                        
                    }
                </div>
            </div>
        </Content>
    )
}