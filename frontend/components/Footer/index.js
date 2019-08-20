import "./style.scss";

export default () => {
    return (
        <div className="footer">
            <div className="footer__label">
                Copyright { new Date().getFullYear() }
            </div>
        </div>    
    );
}