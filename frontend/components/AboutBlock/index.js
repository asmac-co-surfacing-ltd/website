

export default ({ title, items }) => {
    return (
        <div className="terms-block">
            <div className="terms-block__header">
                { title }
            </div>
            <ol type="a">
                {
                    items.map((item, index) => {
                        return (
                            <li className="terms-block__link" key={index}>{item}</li>
                        )
                    })
                    
                }
            </ol>
        </div>
    );
}