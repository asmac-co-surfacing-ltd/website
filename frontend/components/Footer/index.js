import "./style.scss";
import Content from "../Content";

export default () => {
    return (
        <div className="footer">
            <Content>
                <p className="footer__label">Copyright { new Date().getFullYear() }</p>
            </Content>
            <div className="accreditation">
                <div className="accreditation__container">
                    <img className="accreditation__logo" src="/static/images/logos/fors.jpg"/>
                    <img className="accreditation__logo" src="/static/images/logos/cqms.jpg"/>
                </div>
            </div>
        </div>
    );
}