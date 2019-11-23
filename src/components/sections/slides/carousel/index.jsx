/**
 * Componente base do carousel
 */
import React, { useState, useEffect } from 'react';
import './index.css';

const Carousel = ({ slides }) => {
    const [page, setPage] = useState(0);

    const handleNav = (isPrev) => () => {
        let newPage = isPrev ? page - 1 : page + 1;
        if (isPrev) {
            if (newPage < 0) {
                setPage(slides.length - 1);
            } else {
                setPage(newPage);
            }
        } else if (newPage == slides.length) {
            setPage(0);
        } else {
            setPage(newPage);
        }

    }

    useEffect(() => {
        const timeout = setTimeout(handleNav(false), 5000);
        return () => clearTimeout(timeout);
    }, [page]);

    return (
        <figure className="carousel">
            <span className="trs next" onClick={handleNav(false)}></span>
            <span className="trs prev" onClick={handleNav(true)}></span>
            <div className="slider">
                {
                    slides.map((slide, index) =>
                        <div className={`images trs ${index === page ? 'active' : ''}`}>
                            {
                                slide.map(item => <img src={item.img} /> )
                            }
                        </div>
                    )
                }
            </div>
        </figure>
    )
};

export default Carousel;