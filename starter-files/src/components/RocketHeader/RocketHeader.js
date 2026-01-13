import React from 'react';
// style
import './style.scss';
//images
import falcon9Img from '../../assets/falcon-9.jpg';
import falconHeavyImg from '../../assets/falcon-heavy.jpg';
import starshipImg from '../../assets/starship.jpg';

// Creamos un objeto que relacione el ID (o el nombre) con la imagen importada
const ROCKET_IMAGES = {
    "Falcon 9": falcon9Img,
    "Falcon Heavy": falconHeavyImg,
    "Starship": starshipImg
};

const RocketHeader = ({ name }) => {
    const backgroundImage = ROCKET_IMAGES[name];

    const imgStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: '100vh',
    };

    return (
        <div className="d-flex flex-column justify-content-around w-100">
            <div style={imgStyle}>
                <div className="rocket__header__container position-absolute d-flex flex-column align-items-center">
                    <h1 className="rocket__header__text text-light">{name.toUpperCase()}</h1>
                </div>
            </div>
        </div>
    );
};

export default RocketHeader;
