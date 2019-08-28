import "./style.scss"


export default ({title, items }) => {
    return (
        <div className="">
             <div className="about-content">
             
                    <div className="about-block__header">
                         { title }
                    </div>
                <ul type="a">
                    {
                        items.map((item, index) => {
                            return (
                                <li className="about-block__tag" key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
               
     
       
    );
}
