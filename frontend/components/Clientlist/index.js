import "./style.scss";

export default () => {
    return(
            <div className="client-list">
                <div className="client-list__client">
                    <img className="client-list__logo" src="/static/images/logos/barnados.png" title="Barnados" alt="Barnados"/>
                    <span className="client-list__name">Barnados</span>
                </div>
                <div className="client-list__client">
                    <img className="client-list__logo" src="/static/images/logos/briggs.png" title="Woolwich Ferry" alt="Woolwich Ferry"/>
                    <span className="client-list__name">Woolwich Ferry</span>
                </div>
                <div className="client-list__client">
                    <img className="client-list__logo" src="/static/images/logos/cityline.png" title="Cityline" alt="Cityline"/>
                    <span className="client-list__name">Cityline</span>
                </div>
                <div className="client-list__client">
                    <img className="client-list__logo" src="/static/images/logos/dhamecha.png" title="Dhamecha" alt="Dhamecha"/>
                    <span className="client-list__name">Dhamecha</span>
                </div>
                <div className="client-list__client">
                    <img className="client-list__logo" src="/static/images/logos/easternbuilding.png" title="Eastern Building Services" alt="Eastern Building Services"/>
                    <span className="client-list__name">Eastern Building Services</span>
                </div>
                <div className="client-list__client">
                    <img className="client-list__logo" src="/static/images/logos/eds.png" title="Environmental Drainage Services" alt="Environmental Drainage Services"/>
                    <span className="client-list__name">Environmental Drainage Services</span>
                </div>
                <div className="client-list__client">
                    <img className="client-list__logo" src="/static/images/logos/highgate.png" title="Highgate Studios" alt="Highgate Studios"/>
                    <span className="client-list__name">Highgate Studios</span>
                </div>
                <div className="client-list__client">
                    <img className="client-list__logo" src="/static/images/logos/nicholson.png" title="J.Nicholson &amp; Son - Chartered Surveyors" alt="J.Nicholson &amp; Son - Chartered Surveyors"/>
                    <span className="client-list__name">J.Nicholson &amp; Son - Chartered Surveyors</span>
                </div>
                <div className="client-list__client">
                    <img className="client-list__logo" src="/static/images/logos/uel.png" title="University of East London" alt="University of East London"/>
                    <span className="client-list__name">University of East London</span>
                </div>
            </div>
    )
}