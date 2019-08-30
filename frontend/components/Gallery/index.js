import { useState, useEffect } from 'react';

import "./style.scss";

const images = [
    {
        text: 'Woolwich Ferry',
        src: '/static/images/works/woolwich.jpg'
    },
    {
        text: 'Watford',
        src: '/static/images/works/watford.jpg'
    },
    {
        text: 'University of East London',
        src: '/static/images/works/uel.jpg'
    },
    {
        text: 'Ilford Synagogue',
        src: '/static/images/works/synagogue-ilford.jpg'
    }
]

export default () => {
    const [activeIndex, updateActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            updateActiveIndex(previousIndex => {
                const nextIndex = (previousIndex + 1) % images.length;
                return nextIndex;
            });
        }, 6000);
    }, [])

    return (
        <div className="gallery">
            {
                images.map((item, index) => {
                    return (
                        <figure className={`gallery__item${ activeIndex === index ? ' gallery__item--active' : '' }`} key={index}>
                            <img className="gallery__image" src={item.src}/>
                            <figcaption className="gallery__caption">{item.text}</figcaption>
                        </figure>
                    )
                })
            }
            
        </div>
    )
}