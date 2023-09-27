import React, { useEffect, useRef } from 'react';

/*
<a href='https://faqtoff.com' target='_blank' rel='noreferrer'>
    <img src={Img1} alt=''/>
    <div className='text-slide'>
        <p>hola</p>
    </div>
</a>
*/

const Slideshow = ({ children }) => {
    const slideshow = useRef(null);
    const slideshowInterval = useRef(null)

    const next = () => {
        if (slideshow.current?.children.length > 0) {
            const firstElement = slideshow.current?.children[0];
            slideshow.current.style.transition = `5000ms ease-out all`;
            const slideSize = slideshow.current?.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${slideSize}px)`;

            const transition = () => {
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = 'translateX(0)';
                slideshow.current.appendChild(firstElement)

                slideshow.current.removeEventListener('transitionend', transition)
            }

            slideshow.current.addEventListener('transitionend', transition);

        }
    }
    const prev = () => {
        if (slideshow.current.children.length > 0) {

            const index = slideshow.current.children.length - 1;
            const lastElement = slideshow.current.children[index];
            slideshow.current.insertBefore(lastElement, slideshow.current.firstChild)

            slideshow.current.style.transition = 'none';

            const slideSize = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${slideSize}px)`;


            setTimeout(() => {
                slideshow.current.style.transition = `5000ms ease-out all`;
                slideshow.current.style.transform = 'translateX(0)';
            }, 30);

        }
    }

    useEffect(() => {
        slideshowInterval.current = setInterval(() => {
            next();
        }, 5000)

        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(slideshowInterval.current)
        })
        slideshow.current.addEventListener('mouseleave', () => {

            slideshowInterval.current = setInterval(() => {
                next();
            }, 5000)
        })
        return
    }, [])

    return (
        <div className='slider--auto'>
            <div className='slideshow' ref={slideshow}>
                {children}
            </div>

            <div className='slide__controls'>
                <button className='slide__button' onClick={prev}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className='slide__button' onClick={next}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Slideshow
