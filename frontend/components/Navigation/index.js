import Content from '../Content/';

import "./style.scss";

export default () => {
    return (
        <header className="masthead">
            <Content>
                <div className="masthead__container">
                    <div className="masthead__title">Asmac &amp; Co (Surfacing) Ltd</div>
                    <ul className="masthead__links">
                        <li className="masthead__link"><a className="masthead__anchor" href="/">Home</a></li>
                        <li className="masthead__link"><a className="masthead__anchor" href="/sectors">Sectors</a></li>
                        <li className="masthead__link"><a className="masthead__anchor" href="/gallery">Gallery</a></li>
                        <li className="masthead__link"><a className="masthead__anchor" href="/terms">Terms</a></li>
                        <li className="masthead__link"><a className="masthead__anchor" href="/contact">Contact Us</a></li>
                    </ul>
                </div>
            </Content>
        </header>
    );
}