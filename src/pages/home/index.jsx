/**
 * Página Inicial
 */
import React from 'react';
import './index.scss';
import Space from '../../components/effects/space';
import Particles from '../../components/effects/particles';
import Waves from '../../components/effects/waves';
import Connections from '../../components/effects/connections/';

const Home = () => {
    return (
        <div className="banner">
            <div className="children">
                {/* <Space /> */}
                {/* <Particles /> */}
                {/* <Waves /> ERRO */}
                <Connections />
            </div>
        </div>
    )
};

export default Home;