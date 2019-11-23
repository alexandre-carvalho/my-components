import React from 'react';
import './index.scss';
import Carousel from './carousel';

const Slides = () => {
    const images = [
        [
            {
                img: "img-a.png",
            },
            {
                img: "img-b.png",
            },
            {
                img: "img-c.png",
            },
            {
                img: "img-d.png",
            }
        ],
        [
            {
                img: "img-e.png",
            },
            {
                img: "img-f.png",
            },
            {
                img: "img-g.png",
            },
            {
                img: "img-h.png",
            }
        ],
    ].map(item => item.map(({ img }) => ({ img: require(`./images/${img}`) })))

    return (
        <section className="slides">
            <div className="slides-children">
                <div className="itens">
                    <Carousel images={images} />
                </div>
            </div>
        </section>
    )
};

export default Slides;