import "./style.scss";

export default () => {
    return (
        <div className="contact">
            <div className="contact__container">
                <div className="contact">
                    <img src="/static/images/icons/phone.png"/>
                </div>
                <div className="contact__heading-box">
                    <h3 className="contact__type">Landline Number</h3>
                </div>
                <div className="contact__item">
                    <p className="contact__number">020 8550 5741</p>
                </div>
            </div>
            <div className="contact__container">
                <div className="contact">
                    <img src="/static/images/icons/cell-phone.png"/>
                </div>
                <div className="contact__heading-box">
                    <h3 className="contact__type">Mobile Number</h3>
                </div>
                <div className="contact__item">
                    <p className="contact__number">07960 639865</p>
                </div>
            </div>
            <div className="contact__container">
                <div className="contact">
                    <img src="/static/images/icons/email.png"/>
                </div>
                <div className="contact__heading-box">
                    <h3 className="contact__type">Email</h3>
                </div>
                <div className="contact__item">
                    <p className="contact__number">asmac.surfacing.ltd@gmail.com</p>
                </div>
            </div>
        </div>

    )
}