import React from 'react';

export const Preguntas = () => {
    return (
        <section id="contenido-principal" className="container">
            <h2 className="text-center mt-4">PREGUNTAS FRECUENTES</h2>
            <div id="contenido-texto">
                <div>
                    <h2>¿CÓMO COMPRAR?</h2>
                    <p>
                        Podes comenzar tu proceso de compra desde cualquier navegador o
                        cualquier dispositivo. Para eso, solo tienes que seguir los siguientes
                        pasos:
                    </p>
                    <ol>
                        <li>
                            Ingresá a la sección y categoría de tu interés o utiliza el buscador
                            para encontrar un artículo.
                        </li>
                        <li>
                            En cada uno, podrás encontrar todas las características en la
                            descripción de cada producto (composición, talle, color, precio,
                            referencia).
                        </li>
                        <li>
                            Si es la primera vez que compras en nuestra web primero deberás
                            registrarte o si tenes generado previamente un usuario, deberás
                            iniciar sesión.
                        </li>
                        <li>
                            Una vez registrado, podes añadir los artículos que desees comprar a
                            tu carrito y seleccionar la opción de "Finalizar compra" para
                            iniciar el proceso de pago.
                        </li>
                        <li>
                            Deberás completar tus datos y seleccionar el método de pago con el
                            que desees abonar.
                        </li>
                        <li>
                            Ya lo tienes todo. Haz clic en confirmar pedido y… ¡Ya está! Te
                            enviaremos un email de confirmación de pedido a tu correo
                            electrónico.
                        </li>
                    </ol>
                </div>

                <div>
                    <h2>¿CUÁNTO TARDA EN LLEGAR MI COMPRA?</h2>
                    <p>
                        Una vez que se acredite el pago, los pedidos se preparan dentro de las
                        24 horas. Luego te llegará un mail con la información del mismo y el
                        código de seguimiento para que puedas rastrear tu paquete.
                    </p>
                </div>
            </div>

            <section id="mapa-retiro" className="container">
                <h3 className="text-center mt-4">Punto de Retiro</h3>
                <div id="mapa" className="mt-3">
                    <div className="ratio ratio-16x9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13085.579441111213!2d-57.9599073!3d-34.9216328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e70ae8058711%3A0xd8f8676fd2e7b636!2sCAYETANO!5e0!3m2!1ses-419!2sar!4v1711485730910!5m2!1ses-419!2sar"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <p className="text-center mt-3">
                    <h3>Contamos con varios puntos de retiro. ¡Consultanos!</h3>
                </p>
            </section>
        </section>
    );
};