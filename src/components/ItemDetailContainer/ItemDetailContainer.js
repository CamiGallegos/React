import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../asyncMock';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchProduct = async () => {
            const data = await getProductById(id);
            setProduct(data);
            setLoading(false);
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return <LoadingSpinner message="Cargando detalles del producto..." />;
    }

    if (!product) {
        return <p>Producto no encontrado.</p>;
    }

    return (
        <div className="container mt-4">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} className="img-fluid" />
            <p>{product.description}</p>
            <button className="btn btn-primary">Comprar</button>
        </div>
    );
};

export default ItemDetailContainer;
