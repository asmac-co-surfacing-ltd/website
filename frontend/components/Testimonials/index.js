import testimonialData from "../../data/testimonial.json";
import "./style.scss"


const Testimonial = (text, author) => {
    return (
        <div className="testimonial">
            <div className="testimonial__text">
               { text }
            </div>
            <div className="testimonial__author">
                { author }
            </div>
        </div>
    )
}

export default () => {
    return (
        <div className="testimonials-container">
            {
               testimonialData.map((item, index) => {
                   return (
                        <div key={index} className="testimonials-container__box">
                            <Testimonial text={item.text} author={item.author}/>
                        </div>
                   )
               }) 
            }
        </div>
    );
}