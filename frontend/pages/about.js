import Content from "../components/Content";
import aboutData from "../data/about.json"
import AboutBlock from "../components/AboutBlock";

export default () => {
    return (
        <Content>
            <div className="">
                <div className="">
                    <h1 className=""></h1>
                </div>
                <div>
                    {
                        aboutData.map((item, index) => {
                            return (
                                <AboutBlock key="-" title={item.title} items={item.items} />
                            )
                        })
                        
                    }
                </div>
            </div>
        </Content>
    )
}