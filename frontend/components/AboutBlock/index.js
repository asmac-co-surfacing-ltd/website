import "./style.scss"
import Content from "../Content";

export default ({number, title, items }) => {
    return (
        <Content>
                <div className="about-block">
                    <div className="about-block__header">
                        { number }. { title }
                    </div>
                <div>
                    {
                    items.map((item, index) => {
                        return (
                            <p className="about-block__tag" key={index}>{item}</p>
                        )
                    })
                    }
                </div>
            </div>
        </Content>
       
    );
}