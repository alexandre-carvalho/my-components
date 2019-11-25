/**
 * Página Inicial
 */
import React from 'react';
import './index.scss';
import Form from '../../components/form';
import Particles from '../../components/effects/particles';
import Slides from '../../components/sections/slides';
import Buttons from '../../components/sections/buttons';


const Home = () => {
    return (
        <div className="banner">
            <Slides />
            <Buttons />
            {/* <Particles /> */}
            {/* <Form /> */}
        </div>
    )
};

export default Home;