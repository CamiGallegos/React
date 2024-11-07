import React from 'react';
import { BsCart3 } from 'react-icons/bs';

export const CartWidget = () => {
    return (
        <div className="cart-widget d-flex align-items-center ms-lg-4">
            <button className="btn btn-outline-light position-relative">
                <BsCart3 size={24} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    1
                    <span className="visually-hidden">productos en el carrito</span>
                </span>
            </button>
        </div>
    );
};