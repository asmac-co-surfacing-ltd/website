import "./style.scss";
import Content from "../Content";

export default () => {
    return (
        <Content>
            <div className="contact">
                    <img className="contact__icon" src="/static/images/icons/phone.png" alt="phone"/>
                <div className="contact__container">
                    <h3 className="contact__type">Landline Number</h3>
                    <p className="contact__item">020 8550 5741</p>
                </div>
            </div>
            <div className="contact">
                    <img className="contact__icon" src="/static/images/icons/cell-phone.png" alt="mobile"/>
                <div className="contact__container">
                    <h3 className="contact__type">Mobile Number</h3>
                    <p className="contact__item">07960 639865</p>
                </div>
            </div>
            <div className="contact">
                    <img className="contact__icon" src="/static/images/icons/email.png" alt="Emails"/>
                <div className="contact__container">
                    <h3 className="contact__type">Email</h3>
                    <p className="contact__item">asmac.surfacing.ltd@gmail.com</p>
                </div>
            </div>
        </Content>

    )
}