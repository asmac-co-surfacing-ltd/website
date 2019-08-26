import "./style.scss";
import Content from "../Content";

export default () => {
    return (
        <div className="footer">
            <Content>
                <p className="footer__label">Copyright { new Date().getFullYear() }</p>
            </Content> 
        </div>
    );
}