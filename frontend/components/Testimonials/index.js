import "./style.scss"

const Testimonial = () => {
    return (
        <div className="testimonial">
            <div className="testimonial__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem
            </div>
            <div className="testimonial__author">
                Dummy Text
            </div>
        </div>
    )
}

export default () => {
    return (
        <div className="testimonials-container">
            <div className="testimonials-container__box">
                <Testimonial />
            </div>
            <div className="testimonials-container__box">
                <Testimonial />
            </div>
            <div className="testimonials-container__box">
                <Testimonial />
            </div>
            <div className="testimonials-container__box">
                <Testimonial />
            </div>
        </div>
    )
}