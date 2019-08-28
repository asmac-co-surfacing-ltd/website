import Content from "../components/Content";
import sectorData from "../data/sector.json"
import SectorBlock from "../components/SectorBlock";


export default () => {
    return (
        <Content>
            {
                sectorData.map((item, index) => {
                    return (
                        <SectorBlock key={index} title={item.title} items={item.items} />
                    )
                })
            }
        </Content>
    )
}