/**
 * Página Inicial
 */
import React from 'react';
import './index.scss';
import Particles from '../../components/effects/particles';
import Teste from '../../components/effects/teste';

const Home = () => {
    return (
        <div className="banner">
            <div className="children">
                {/* <Particles /> */}
                <Teste />
            </div>
        </div>
    )
};

export default Home;