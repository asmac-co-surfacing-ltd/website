import "./style.scss"


export default ({number, title, items }) => {
    return (
        <div>
             <div className="about-block">
             
                    <div className="about-block__header">
                        { number }. { title }
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
