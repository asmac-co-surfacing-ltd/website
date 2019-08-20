import Content from "../components/Content";
import aboutData from "../data/about.json"
import AboutBlock from "../components/AboutBlock";

export default () => {
    return (
        <Content>
            <div className="about-box">
                <div>
                    {
                        aboutData.map((item) => {
                            return (
                                <div>
                                <AboutBlock key title={item.title} items={item.items} />
                                </div>
                            )
                        })
                        
                    }
                </div>
            </div>
        </Content>
    )
}