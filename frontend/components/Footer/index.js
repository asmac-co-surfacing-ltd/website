import "./style.scss";
import Content from "../Content";

export default () => {
    return (
        <div className="footer">
            <Content>
                <p className="footer__label">Copyright { new Date().getFullYear() }</p>
            </Content>
            <div className="accreditation">
                <img className="accreditation__logo" title="Fleet Operator Recognition Scheme" src="/static/images/logos/fors.jpg"/>
                <img className="accreditation__logo" title="CQMS Safety Scheme" src="/static/images/logos/cqms.jpg"/>
            </div>
        </div>
    );
}