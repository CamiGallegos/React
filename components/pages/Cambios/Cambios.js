import React from 'react';

export const Cambios = () => {
    return (
        <main id="contenido-principal" className="container">
            <h2 className="text-center mt-4">CAMBIOS</h2>
            <div className="contenido-cambios">
                <div className="imagen-cambios">
                    <img
                        src={require('../../../assets/images/img-pufer-marron3.jpeg').default}
                        alt="Imagen de cambios"
                        className="img-fluid"
                    />
                </div>
                <div className="texto-cambios">
                    <h2>¿CÓMO GESTIONO UN CAMBIO/DEVOLUCIÓN?</h2>
                    <p>
                        Para solicitar un cambio o devolución deberán contactarse con
                        nosotros a nuestra casilla de holacayetano@gmail.com. O comunícate
                        al WhatsApp. Nuestro horario de atención es de Lunes a Sábados de
                        9:00 a 18:00 hs.
                    </p>
                    <p>Envianos un mensaje vía WhatsApp detallando:</p>
                    <ul>
                        <li>Número de orden (recibido al momento de realizar la compra)</li>
                        <li>Modelo y talle de la nueva prenda que desees obtener</li>
                        <li>
                            Método de cambio que desees: "cambio presencial en punto de
                            retiro" o "envío a domicilio" (Consultar costo adicional por zona)
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};