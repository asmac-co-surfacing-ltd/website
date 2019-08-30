import "./style.scss";
import Content from "../Content";

export default () => {
    return (
        <div>
            <h2 className="heading">Contact Us</h2>
            <div className="contact">
                <div className="contact__icon-pin">
                    <img className="contact__icon" src="/static/images/icons/phone.png" alt="phone"/>
                </div>
                <div className="contact__heading-box">
                    <h3 className="contact__type">Landline Number</h3>
                    <p className="contact__item">020 8550 5741</p>
                </div>
            </div>
            <div className="contact">
                <div className="contact__icon-pin">
                    <img className="contact__icon" src="/static/images/icons/cell-phone.png" alt="mobile"/>
                </div>
                <div className="contact__heading-box">
                    <h3 className="contact__type">Mobile Number</h3>
                    <p className="contact__item">07960 639865</p>
                </div>
            </div>
            <div className="contact">
                <div className="contact__icon-pin">
                    <img className="contact__icon" src="/static/images/icons/email.png" alt="Emails"/>
                </div>
                <div className="contact__heading-box">
                    <h3 className="contact__type">Email</h3>
                    <p className="contact__item">asmac.surfacing.ltd@gmail.com</p>
                </div>
            </div>
        </div>

    )
}