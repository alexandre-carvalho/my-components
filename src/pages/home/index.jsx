/**
 * Página Inicial
 */
import React from 'react';
import './index.scss';
import Space from '../../components/effects/space';
import Particles from '../../components/effects/particles';

const Home = () => {
    return (
        <div className="banner">
            <div className="children">
                {/* <Space /> */}
                <Particles />
            </div>
        </div>
    )
};

export default Home;