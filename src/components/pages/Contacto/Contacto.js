import React from 'react';

export const Contacto = () => {
    return (
        <main id="contenido-principal" className="container">
            <h2 className="text-center mt-4">CONTACTO</h2>
            <div className="formulario-contacto">
                <form>
                    <div className="campo-formulario">
                        <label htmlFor="nombre" className="form-label">NOMBRE *</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="campo-formulario">
                        <label htmlFor="email" className="form-label">CORREO ELECTRÓNICO *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="campo-formulario">
                        <label htmlFor="telefono" className="form-label">NÚMERO DE TELÉFONO *</label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="campo-formulario">
                        <label htmlFor="mensaje" className="form-label">MENSAJE *</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            className="form-control"
                            required
                        ></textarea>
                    </div>
                    <div className="boton-formulario">
                        <button type="submit" className="btn btn-primary">ENVIAR</button>
                    </div>
                </form>
            </div>
        </main>
    );
};