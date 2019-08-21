import "./style.scss";
import Content from "../Content";


export default () => {
    return (
        <Content>
                <div className="footer">
                    Copyright { new Date().getFullYear() }
                </div>
        </Content>    
            
    );
}