import React from 'react';

export const Productos = () => {
    return (
        <section id="contenido-productos" className="container">
            <h2 className="text-center mt-4">PRODUCTOS</h2>
            <div className="row fila-productos">
                <div className="col-md-3">
                    <div className="producto">
                        <img
                            src={require('../../../assets/images/foto1.jpeg')}
                            alt="Producto 1"
                            className="img-fluid producto-imagen"
                            data-bs-toggle="modal"
                            data-bs-target="#productoModal1"
                        />
                        <div className="overlay">
                            <div className="overlay-content text-center">
                                <h3>REME SUPPLY</h3>
                                <button className="btn btn-comprar boton-comprar">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="producto">
                        <img
                            src={require('../../../assets/images/foto2.jpeg')}
                            alt="Producto 2"
                            className="img-fluid producto-imagen"
                            data-bs-toggle="modal"
                            data-bs-target="#productoModal2"
                        />
                        <div className="overlay">
                            <div className="overlay-content text-center">
                                <h3>REME MALIBU</h3>
                                <button className="btn btn-comprar boton-comprar">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="producto">
                        <img
                            src={require('../../../assets/images/foto3.jpeg')}
                            alt="Producto 3"
                            className="img-fluid producto-imagen"
                            data-bs-toggle="modal"
                            data-bs-target="#productoModal3"
                        />
                        <div className="overlay">
                            <div className="overlay-content text-center">
                                <h3>REME OCEAN</h3>
                                <button className="btn btn-comprar boton-comprar">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="producto">
                        <img
                            src={require('../../../assets/images/foto4.jpeg')}
                            alt="Producto 4"
                            className="img-fluid producto-imagen"
                            data-bs-toggle="modal"
                            data-bs-target="#productoModal4"
                        />
                        <div className="overlay">
                            <div className="overlay-content text-center">
                                <h3>REME SURF FACES</h3>
                                <button className="btn btn-comprar boton-comprar">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row fila-productos">
                <div className="col-md-3">
                    <div className="producto">
                        <img
                            src={require('../../../assets/images/img-buzo-homies.jpeg')}
                            alt="Producto 5"
                            className="img-fluid producto-imagen"
                            data-bs-toggle="modal"
                            data-bs-target="#productoModal5"
                        />
                        <div className="overlay">
                            <div className="overlay-content text-center">
                                <h3>BUZO HOMIES</h3>
                                <button className="btn btn-comprar boton-comprar">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="producto">
                        <img
                            src={require('../../../assets/images/img-buzo-newworld.jpeg')}
                            alt="Producto 6"
                            className="img-fluid producto-imagen"
                            data-bs-toggle="modal"
                            data-bs-target="#productoModal6"
                        />
                        <div className="overlay">
                            <div className="overlay-content text-center">
                                <h3>BUZO NEW WORLD</h3>
                                <button className="btn btn-comprar boton-comprar">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="producto">
                        <img
                            src={require('../../../assets/images/img-buzo-wonder.jpeg')}
                            alt="Producto 7"
                            className="img-fluid producto-imagen"
                            data-bs-toggle="modal"
                            data-bs-target="#productoModal7"
                        />
                        <div className="overlay">
                            <div className="overlay-content text-center">
                                <h3>BUZO WONDER</h3>
                                <button className="btn btn-comprar boton-comprar">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="producto">
                        <img
                            src={require('../../../assets/images/img-buzo-azul.jpeg')}
                            alt="Producto 8"
                            className="img-fluid producto-imagen"
                            data-bs-toggle="modal"
                            data-bs-target="#productoModal8"
                        />
                        <div className="overlay">
                            <div className="overlay-content text-center">
                                <h3>BUZO AZUL</h3>
                                <button className="btn btn-comprar boton-comprar">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row fila-productos">
                <div className="col-md-3">
                    <div className="producto">
                        <img
                            src={require('../../../assets/images/img-pufer-azul.jpeg')}
                            alt="Producto 9"
                            className="img-fluid producto-imagen"
                            data-bs-toggle="modal"
                            data-bs-target="#productoModal9"
                        />
                        <div className="overlay">
                            <div className="overlay-content text-center">
                                <h3>PUFER AZUL</h3>
                                <button className="btn btn-comprar boton-comprar">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="producto">
                        <img
                            src={require('../../../assets/images/img-pufer-marron3.jpeg')}
                            alt="Producto 10"
                            className="img-fluid producto-imagen"
                            data-bs-toggle="modal"
                            data-bs-target="#productoModal10"
                        />
                        <div className="overlay">
                            <div className="overlay-content text-center">
                                <h3>PUFER MARRON</h3>
                                <button className="btn btn-comprar boton-comprar">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="producto">
                        <img
                            src={require('../../../assets/images/img-pufer-violeta1.jpeg')}
                            alt="Producto 11"
                            className="img-fluid producto-imagen"
                            data-bs-toggle="modal"
                            data-bs-target="#productoModal11"
                        />
                        <div className="overlay">
                            <div className="overlay-content text-center">
                                <h3>PUFER VIOLETA</h3>
                                <button className="btn btn-comprar boton-comprar">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="producto">
                        <img
                            src={require('../../../assets/images/img-pufer-roja.jpeg')}
                            alt="Producto 12"
                            className="img-fluid producto-imagen"
                            data-bs-toggle="modal"
                            data-bs-target="#productoModal12"
                        />
                        <div className="overlay">
                            <div className="overlay-content text-center">
                                <h3>PUFER ROJA</h3>
                                <button className="btn btn-comprar boton-comprar">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modales */}
            <div
                className="modal fade"
                id="productoModal1"
                tabIndex="-1"
                aria-labelledby="productoModal1Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img
                                src={require('../../../assets/images/foto1.jpeg')}
                                alt="Producto 1"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="productoModal2"
                tabIndex="-1"
                aria-labelledby="productoModal2Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img
                                src={require('../../../assets/images/foto2.jpeg')}
                                alt="Producto 2"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="productoModal3"
                tabIndex="-1"
                aria-labelledby="productoModal3Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img
                                src={require('../../../assets/images/foto3.jpeg')}
                                alt="Producto 3"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="productoModal4"
                tabIndex="-1"
                aria-labelledby="productoModal4Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img
                                src={require('../../../assets/images/foto4.jpeg')}
                                alt="Producto 4"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="productoModal5"
                tabIndex="-1"
                aria-labelledby="productoModal5Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img
                                src={require('../../../assets/images/img-buzo-homies.jpeg')}
                                alt="Producto 5"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="productoModal6"
                tabIndex="-1"
                aria-labelledby="productoModal6Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img
                                src={require('../../../assets/images/img-buzo-newworld.jpeg')}
                                alt="Producto 6"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="productoModal7"
                tabIndex="-1"
                aria-labelledby="productoModal7Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img
                                src={require('../../../assets/images/img-buzo-wonder.jpeg')}
                                alt="Producto 7"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="productoModal8"
                tabIndex="-1"
                aria-labelledby="productoModal8Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img
                                src={require('../../../assets/images/img-buzo-azul.jpeg')}
                                alt="Producto 8"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="productoModal9"
                tabIndex="-1"
                aria-labelledby="productoModal9Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img
                                src={require('../../../assets/images/img-pufer-azul.jpeg')}
                                alt="Producto 9"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="productoModal10"
                tabIndex="-1"
                aria-labelledby="productoModal10Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img
                                src={require('../../../assets/images/img-pufer-marron3.jpeg')}
                                alt="Producto 10"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="productoModal11"
                tabIndex="-1"
                aria-labelledby="productoModal11Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img
                                src={require('../../../assets/images/img-pufer-violeta1.jpeg')}
                                alt="Producto 11"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="productoModal12"
                tabIndex="-1"
                aria-labelledby="productoModal12Label"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img
                                src={require('../../../assets/images/img-pufer-roja.jpeg')}
                                alt="Producto 12"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};