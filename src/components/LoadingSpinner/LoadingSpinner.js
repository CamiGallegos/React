import React from 'react';

const LoadingSpinner = ({ message = "Cargando..." }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "50vh" }}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">{message}</span>
            </div>
            <p className="mt-3">{message}</p>
        </div>
    );
};

export default LoadingSpinner;
