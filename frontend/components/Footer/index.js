import "./style.scss";

export default () => {
    return (
        <div className="footer">
            Copyright { new Date().getFullYear() }
        </div>
    );
}