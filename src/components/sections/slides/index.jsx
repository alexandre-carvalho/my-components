import React from 'react';
import './index.scss';
import Carousel from './carousel';

const Slides = () => {
    const slides = [
        [
            {
                img: "img.png",
            },
            {
                img: "img.png",
            },
            {
                img: "img.png",
            }
        ],
        [
            {
                img: "img2.png",
            },
            {
                img: "img2.png",
            },
            {
                img: "img2.png",
            }
        ],
    ].map(item => item.map(({ img }) => ({ img: require(`./images/${img}`) })))

    return (
        <section className="slides">
            <div className="slides-children">
                <div className="itens">
                    <Carousel slides={slides} />
                </div>
            </div>
        </section>
    )
};

export default Slides;