import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const Inicio = () => {
    return (
        <div className="inicio-container">
            <div className="carousel-wrapper">
                <Carousel
                    fade
                    interval={3000}
                    className="main-carousel"
                    controls={true}
                    indicators={true}
                >
                    <Carousel.Item>
                        <div className="carousel-image-container">
                            <img
                                src={require('../../../assets/images/img-pufer-roja1.jpeg')}
                                alt="Pufer Roja 1"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-image-container">
                            <img
                                src={require('../../../assets/images/img-pufer-roja2.jpeg')}
                                alt="Pufer Roja 2"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-image-container">
                            <img
                                src={require('../../../assets/images/img-pufer-roja3.jpeg')}
                                alt="Pufer Roja 3"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-image-container">
                            <img
                                src={require('../../../assets/images/img-pufer-roja4.jpeg')}
                                alt="Pufer Roja 4"
                            />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            <footer className="page-footer">
                <div className="footer-content">
                    <h3>¡Bienvenidos a CAYETANO!</h3>
                    <p>TU OUTFIT MAS CANCHERO</p>
                </div>
            </footer>
        </div>
    );
};

export default Inicio;