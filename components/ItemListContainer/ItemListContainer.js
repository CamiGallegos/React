import React from 'react';
import Container from 'react-bootstrap/Container';

export const ItemListContainer = ({ greeting }) => {
    return (
        <Container className="mt-4 text-center">
            <h2>{greeting}</h2>
            <div className="mt-4">
                <h3>TU OUTFIT MAS CANCHERO</h3>
            </div>
        </Container>
    );
};