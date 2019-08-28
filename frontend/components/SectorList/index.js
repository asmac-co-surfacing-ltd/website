import sectorData from "../../data/sector.json";

import "./style.scss";

const SectorBlock = ({ icon, title, text }) => {
    return (
        <div className="sector">
                <div className="sector__header">
                    { title } 
                </div>
                <div className="sector__passage">
                    { text }
                </div>
        </div>
    );
}

export default () => {
    return (
        <div className="sector-list">
            { 
                sectorData.map((item, index) => {
                    return (
                        <div key={index} className="sector-list__item">
                            <SectorBlock title={item.title} text={item.text} />
                        </div>
                    )
                })
            }
        </div>
    );
}
