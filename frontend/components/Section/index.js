import Content from "../Content";

import "./style.scss";

export default ({ title, theme, children }) => {
    return (
        <div className={`section${theme ? ` section--${theme}` : ''}`}>
            <Content>
                { title && <h2 className="section__title">{title}</h2> }
                <div className="section__content">
                    { children }
                </div>
            </Content>
        </div>
    )
}