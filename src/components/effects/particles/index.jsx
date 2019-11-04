/**
 * Página Inicial
 */
import React from 'react';
import './index.css';
import ParticleField from "react-particles-webgl";

const Particles = () => {
    /**
       * Docs
       * @see https://timellenberger.com/libraries/react-particles-webgl
       *
       * Config Builder
       * @see https://timellenberger.com/particles
       *
       * Repo
       * @see https://github.com/tim-soft/react-particles-webgl
       */
    const config = {
        showCube: false,
        dimension: "3D",
        velocity: 2.0,
        boundaryType: "bounce",
        antialias: true,
        direction: {
            xMin: -1,
            xMax: 1,
            yMin: -1,
            yMax: 1,
            zMin: -1,
            zMax: 1
        },
        lines: {
            colorMode: "solid",
            color: "#3FB568",
            transparency: 0.9,
            limitConnections: true,
            maxConnections: 1,
            minDistance: 320,
            visible: true
        },
        particles: {
            colorMode: "solid",
            color: "#3FB568",
            transparency: 0.9,
            shape: "square",
            // shape: "circle",
            boundingBox: "canvas",
            count: 50,
            minSize: 50,
            maxSize: 50,
            visible: true
        },
        cameraControls: {
            enabled: false,
            enableDamping: true,
            dampingFactor: 0.2,
            enableZoom: true,
            autoRotate: false,
            autoRotateSpeed: 0.3,
            resetCameraFlag: true
        }
    };

    return (
        <div className="effect">
            <ParticleField config={config} />
        </div>
    );
};

export default Particles;