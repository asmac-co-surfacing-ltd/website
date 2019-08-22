import Content from "../components/Content";

export default () => {
    return (
        <Content>
            <div className="header">
                <h2 className="header__title">Welcome to Asmac</h2>
            </div>
            <div className="box-container">
                <div className="box-container__link">setion 1</div>
                <div className="box-container__link">section 2</div>
                <div className="box-container__link">section 3</div>
                <div className="box-container__link">section 4</div>
            </div>
            <div className="box-container">
                <div className="box-container__link">setion 5</div>
                <div className="box-container__link">section 6</div>
                <div className="box-container__link">section 7</div>
                <div className="box-container__link">section 8</div>
            </div>
        </Content>
    );

};

